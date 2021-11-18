import Kweet from 'components/Kweet';
import { addDoc, collection, onSnapshot, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { fdb } from 'service/fbase';

export default function Home({ userObj }) {
  const [kweet, setKweet] = useState("");
  const [kweets, setKweets] = useState([]);
  const docRef = collection(fdb, "kweets");
  const realTime = () => {
    onSnapshot(docRef, (snapshot) => {
      const kweetArray = snapshot.docs.map(doc => { console.log(doc); return { id: doc.id, ...doc.data() } })
      setKweets(kweetArray);
    })
  }
  const fetchDb = async () => {
    const data = await getDocs(docRef)
    const newKweetsArray = data.docs.map((doc) => {
      return {
        id: doc.id, ...doc.data()
      }
    })

    setKweets(newKweetsArray);
  }

  useEffect(() => {
    realTime(); // 리얼타임 반영
    // fetchDb(); 한번패치
  }, [])

  const handleChange = (event) => {
    const { target: { value } } = event
    setKweet(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(fdb, "kweets"), {
        text: kweet,
        createAt: Date.now(),
        creatorId: userObj.uid
      })
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="what's on your mind?" maxLength={120} onChange={handleChange} value={kweet} />
        <input type="submit" value="kimweet" />
      </form>
      <div>
        {kweets &&
          kweets.map((kweet) => <Kweet key={kweet.id} kweetObj={kweet} isOwner={kweet.creatorId === userObj.uid} />)}
      </div>

    </div>
  )
}
