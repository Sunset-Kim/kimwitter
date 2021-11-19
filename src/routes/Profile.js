import { updateProfile } from '@firebase/auth';
import { collection, getDocs, orderBy, query, where } from '@firebase/firestore';
import Kweet from 'components/Kweet';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { authService, fdb, logOut } from 'service/fbase'

export default function Profile({ refreshUserData, userObj }) {
  const navigation = useNavigate();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [ownKweets, setOwnKweets] = useState([]);

  // #1. logout
  const onLogOutClick = () => {
    logOut(authService);
    navigation("/login");
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

  // #3. change user display name
  const handleChangeDisplayName = (event) => {
    const { target: { value } } = event;
    console.log(value)
    setNewDisplayName(value)
  }

  const handleSubmitDisplayName = async (event) => {
    event.preventDefault();
    // 유저 디스플레이 이름을 바꿈
    if (userObj.displayName === newDisplayName) return

    await updateProfile(authService.currentUser, {
      displayName: newDisplayName
    })

    refreshUserData();
  }

  useEffect(() => {
    getOwnKweet(userObj.uid);
  }, []);


  return (
    <div>
      profile
      <button onClick={onLogOutClick}>Logout</button>
      <div>
        <div>
          <h2>내 프로필</h2>
          <form onSubmit={handleSubmitDisplayName}>
            <input type="text" placeholder="set your new display name" value={newDisplayName} onChange={handleChangeDisplayName} />
            <input type="submit" value="change" />
          </form>
        </div>
        <div>
          <h3>새로고침</h3>
          <button onClick={() => { getOwnKweet(userObj.uid) }}>새로고침</button>
        </div>
        <h3>내가 쓴 kweets</h3>
        {ownKweets && ownKweets.length > 0 &&
          <div>
            {ownKweets.map(kweet => <Kweet key={kweet.id} kweetObj={kweet} isOwner={true} />)}
          </div>}
      </div>
    </div>
  )
}
