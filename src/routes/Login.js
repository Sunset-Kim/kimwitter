import LoginForm from 'components/LoginForm';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import SocialLogin from 'components/SocialLogin';
import { authService } from 'service/fbase';

export default function Login({ userObj, refreshUserData }) {
  const navigation = useNavigate();

  useEffect(() => {
    if (userObj) {
      navigation("/");
    }
  }, [userObj])

  return (
    <>
      <LoginForm refreshUserData={refreshUserData} />
      <SocialLogin refreshUserData={refreshUserData} />
    </>
  )
}
