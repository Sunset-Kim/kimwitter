import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "routes/Login";
import Home from 'routes/Home'
import Navigation from "components/Navigation";
import Profile from "routes/Profile";
import RequiredAuth from "components/RequiredAuth";

export default function AppRouter({ isLoggedIn, userObj }) {
  return <Router>
    <>

      {isLoggedIn && <Navigation></Navigation>}

      <Routes>

        <Route exact path="/" element={
          <RequiredAuth isLoggedIn={isLoggedIn}>
            <Home userObj={userObj} />
          </RequiredAuth>
        } />

        <Route exact path="/profile" element={
          <RequiredAuth isLoggedIn={isLoggedIn}>
            <Profile userObj={userObj} />
          </RequiredAuth>
        } />

        <Route exact path="/login" element={
          <Login />
        } />

      </Routes>
    </>
  </Router >
}