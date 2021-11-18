import React from 'react'
import { useLocation, Navigate } from 'react-router'

export default function RequiredAuth({ isLoggedIn, children }) {
  let location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />
  }
  return children
}
