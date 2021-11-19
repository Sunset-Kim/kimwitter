import React from 'react'
import { signInWithPopup } from '@firebase/auth';
import { authService, githubProvider, googleProvider } from 'service/fbase';

export default function SocialLogin(refreshUserData) {


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
      await signInWithPopup(authService, provider);

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    } finally {

    }


  }


  return (
    <div>
      <button name="google" onClick={onSocialClick}>Continue with google</button>
      <button name="gh" onClick={onSocialClick}>Continue with github</button>
    </div>
  )
}
