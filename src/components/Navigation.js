import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
      </ul>
    </div>
  )
}
