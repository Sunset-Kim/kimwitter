import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation({ userObj }) {

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">{
            userObj &&
              userObj.displayName === null ? "default Name " : userObj.displayName}profile</Link>
        </li>
      </ul>
    </div>
  )
}
