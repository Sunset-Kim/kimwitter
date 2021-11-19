import React, { useState } from 'react'
import { authService, createUser, signIn } from 'service/fbase';

export default function LoginForm({ refreshUserData }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(false);
  // change login type
  const toggleAccount = () => setNewAccount(prev => !prev);

  // onLogin
  const onChange = (event) => {
    const { target: { name, value } } = event
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value)
    }
  }

  // onSubmit
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create new account
        data = await createUser(authService, email, password);
      } else {
        // sign in
        data = await signIn(authService, email, password);
      }
      refreshUserData()

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    } finally {

    }
  }



  return (
    <>
      <button onClick={toggleAccount}>{newAccount ? "Log in" : "Create New Account"}</button>
      <form onSubmit={onSubmit} >
        <input type="email" placeholder="이메일을 입력하세요" required value={email} onChange={onChange} name="email" />
        <input type="password" placeholder="********" value={password} onChange={onChange} name="password" />
        <input type="submit" value={newAccount ? "Create New Account" : "Login"} />
      </form>
    </>
  )
}
