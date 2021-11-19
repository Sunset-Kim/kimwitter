import { ref, uploadString, getDownloadURL } from '@firebase/storage';
import Kweet from 'components/Kweet';
import { addDoc, collection, onSnapshot, getDocs, query, orderBy } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react'
import { fdb, storageService } from 'service/fbase';
import { v4 as uuidv4 } from "uuid";

export default function Home({ userObj }) {
  const [kweet, setKweet] = useState("");
  const [kweets, setKweets] = useState([]);
  const [attachment, setAttachment] = useState(null);

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

  const handleChange = (event) => {
    const { target: { value } } = event
    setKweet(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";

    if (attachment) {
      const fileRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
      const response = await uploadString(fileRef, attachment, "data_url");
      attachmentUrl = await getDownloadURL(response.ref);
    }

    const kweetObj = {
      text: kweet,
      createAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl
    }

    // uploade kweets
    try {
      const docRef = await addDoc(collection(fdb, "kweets"), kweetObj)
      console.log("Document written with ID: ", docRef.id);
      setAttachment('');
      setKweet('');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const onFileChange = (event) => {
    const { target: { files } } = event;
    if (files) {
      const theFile = files[0];
      printFile(theFile);
    }
  }

  const printFile = useCallback((file) => {
    const reader = new FileReader()
    reader.onloadend = function (event) {
      console.log(event);
      const { currentTarget: { result } } = event
      setAttachment(result);
    };
    reader.readAsDataURL(file);
  }, [])

  const onClearAttachment = () => {
    setAttachment(null);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="what's on your mind?" maxLength={120} onChange={handleChange} value={kweet} />
        <input type="submit" value="kimweet" />
        <input type="file" accept="image/*" onChange={onFileChange} />

        {attachment && <div>
          <img src={attachment} width="50px" height="50px" />
          <button type="button" onClick={onClearAttachment}>Clear</button>
        </div>}
      </form>
      <div>
        {kweets &&
          kweets.map((kweet) => <Kweet key={kweet.id} kweetObj={kweet} isOwner={kweet.creatorId === userObj.uid} />)}
      </div>


    </div>
  )
}
