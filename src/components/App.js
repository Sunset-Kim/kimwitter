import React, { useState, useEffect } from "react";
import AppRouter from "components/AppRouter";
import { authService, onAuthChanged } from "service/fbase";
import { updateProfile } from "@firebase/auth";


function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    onAuthChanged(authService, (user) => {

      if (user) {
        if (user.displayName === null) {
          updateProfile(user, { displayName: 'Default' })
        }
        setUserObj({ ...user });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true)
    });
    return () => { }
  }, [])

  const refreshUserData = () => {
    setUserObj({ ...authService.currentUser });
  }

  return (
    <>
      {init ? <AppRouter refreshUserData={refreshUserData} isLoggedIn={isLoggedIn} userObj={userObj} /> : "Initailizing..."}
      <footer>&copy; footer</footer>
    </>
  );
}

export default App;