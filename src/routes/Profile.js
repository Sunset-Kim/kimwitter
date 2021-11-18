import React from 'react'
import { authService, logOut } from 'service/fbase'

export default function Profile() {
  const onLogOutClick = () => {
    logOut(authService);
  }
  return (
    <div>
      profile
      <button onClick={onLogOutClick}>Logout</button>
    </div>
  )
}
