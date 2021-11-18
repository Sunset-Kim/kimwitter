import { deleteDoc, doc, setDoc } from '@firebase/firestore';
import React, { useState } from 'react'

import { fdb } from 'service/fbase';

export default function Kweet({ kweetObj, isOwner }) {
  const [editing, setEditing] = useState(false);
  const [newKweet, setNewKweet] = useState(kweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Are You suer you want to delete this kweet?");
    if (ok) {
      try {
        await deleteDoc(doc(fdb, "kweets", kweetObj.id))
      } catch (error) {
        console.log(error);
      }
    } else {

    }
  }

  const toggleEditing = () => {
    setEditing(prev => !prev);
  }
  const onChangeHandler = (event) => {
    const { target: { value } } = event;
    console.log(value);
    setNewKweet(value);
  }

  const onSubmitKweet = async (event) => {
    event.preventDefault();

    try {
      await setDoc(doc(fdb, "kweets", kweetObj.id), { ...kweetObj, text: newKweet, createAt: Date.now() });
      setEditing(false);
    } catch (error) {

    }
  }

  return (
    <div>
      <h4>{kweetObj.text}</h4>
      {
        isOwner &&
        <div>
          <button onClick={onDeleteClick}>Delete Kweet</button>
          <button onClick={toggleEditing}>Edit Kweet</button>
        </div>
      }
      {
        editing &&
        <>

          <form onSubmit={onSubmitKweet}>
            <input type="text" value={newKweet} onChange={onChangeHandler} />
            <input type="submit" value="edit" />
          </form>
          <button onClick={toggleEditing}>Cancle</button>
        </>
      }
    </div>
  )
}
