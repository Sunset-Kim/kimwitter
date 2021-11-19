import { collection, getDocs, orderBy, query, where } from '@firebase/firestore';
import Kweet from 'components/Kweet';
import React, { useEffect, useState } from 'react'
import { authService, fdb, logOut } from 'service/fbase'

export default function Profile({ userObj }) {

  const [ownKweets, setOwnKweets] = useState([]);


  // #1. logout
  const onLogOutClick = () => {
    logOut(authService);
  };

  // #2. get own kweet
  const getOwnKweet = async (userId) => {
    const ownKweetList = [];
    const kweetsRef = collection(fdb, "kweets");
    const q = query(kweetsRef, orderBy("createAt", "desc"), where("creatorId", "==", userId))
    const result = await getDocs(q);
    result.forEach(item => {
      const kweetObj = {
        id: item.id,
        ...item.data()
      }
      ownKweetList.push(kweetObj);
    })

    setOwnKweets([...ownKweetList])
  };

  useEffect(() => {
    getOwnKweet(userObj.uid);
  }, []);


  return (
    <div>
      profile
      <button onClick={onLogOutClick}>Logout</button>
      <div>
        <div>
          <button>새로고침</button>
        </div>
        {ownKweets && ownKweets.length > 0 &&
          <div>
            {ownKweets.map(kweet => <Kweet key={kweet.id} kweetObj={kweet} isOwner={true} />)}
          </div>}
      </div>
    </div>
  )
}
