import React, { useEffect, useState } from 'react'
import Kweet from 'components/Kweet';
import KweetForm from 'components/KweetForm';
import { collection, onSnapshot, getDocs, query, orderBy } from 'firebase/firestore';
import { fdb } from 'service/fbase';

export default function Home({ userObj }) {
  const [kweets, setKweets] = useState([]);
  const docRef = collection(fdb, "kweets");
  const q = query(docRef, orderBy("createAt", "desc"))

  const realTime = () => {
    onSnapshot(q, (snapshot) => {
      const kweetArray = snapshot.docs.map(doc => { console.log(doc); return { id: doc.id, ...doc.data() } })
      setKweets(kweetArray);
    })
  }

  const fetchDb = async () => {
    const data = await getDocs(q)
    const newKweetsArray = data.docs.map((doc) => {
      return {
        id: doc.id, ...doc.data()
      }
    })

    setKweets(newKweetsArray);
  }

  useEffect(async () => {
    // download kweet text
    realTime(); // 리얼타임 반영
    // fetchDb(); 한번패치
  }, [])

  return (
    <div>
      <KweetForm userObj={userObj} />
      <div>
        {kweets &&
          kweets.map((kweet) => <Kweet key={kweet.id} kweetObj={kweet} isOwner={kweet.creatorId === userObj.uid} />)}
      </div>


    </div>
  )
}
