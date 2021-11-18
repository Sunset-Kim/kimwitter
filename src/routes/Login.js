import { signInWithPopup } from '@firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { authService, signIn, createUser, googleProvider, githubProvider } from 'service/fbase';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [newAccount, setNewAccount] = useState(false);
  const navigation = useNavigate();



  useEffect(() => {
    if (user) {
      navigation("/");
    }
  }, [user])

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
      console.log(data)
      setUser(data.user);
      console.log(user)
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    } finally {

    }
  }
  // on Sociallogin 
  const onSocialClick = async (event) => {
    const { target: { name } } = event;
    let provider;

    try {
      if (name === "google") {
        provider = googleProvider;
      } else if (name === "gh") {
        provider = githubProvider;
      }
      console.log(signInWithPopup);
      const data = await signInWithPopup(authService, provider);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    } finally {

    }


  }

  return (
    <div>
      <button onClick={toggleAccount}>{newAccount ? "Log in" : "Create New Account"}</button>
      <form onSubmit={onSubmit} >
        <input type="email" placeholder="이메일을 입력하세요" required value={email} onChange={onChange} name="email" />
        <input type="password" placeholder="********" value={password} onChange={onChange} name="password" />
        <input type="submit" value={newAccount ? "Create New Account" : "Login"} />
      </form>
      <div>
        <button name="google" onClick={onSocialClick}>Continue with google</button>
        <button name="gh" onClick={onSocialClick}>Continue with github</button>
      </div>
    </div>
  )
}
