import { addDoc, collection } from '@firebase/firestore';
import { getDownloadURL, ref, uploadString } from '@firebase/storage';
import React, { useCallback, useState } from 'react'
import { fdb, storageService } from 'service/fbase';
import { v4 as uuidv4 } from "uuid";

export default function KweetForm({ userObj }) {
  const [kweet, setKweet] = useState("");
  const [attachment, setAttachment] = useState(null);

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

  const onClearAttachment = () => {
    setAttachment(null);
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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="what's on your mind?" maxLength={120} onChange={handleChange} value={kweet} />
        <input type="submit" value="kimweet" />
        <input type="file" accept="image/*" onChange={onFileChange} />

        {attachment && <div>
          <img src={attachment} width="50px" height="50px" />
          <button type="button" onClick={onClearAttachment}>Clear</button>
        </div>}
      </form>
    </>
  )
}
