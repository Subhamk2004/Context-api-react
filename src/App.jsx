import { useState } from 'react'
import './App.css'
import UserContextProvider from "./Context/UserContextProvider.jsx";
import Login from "./Components/Login.jsx";
import Profile from "./Components/Profile.jsx";

function App() {

  return (
    <UserContextProvider>
      <h1>Subhamk2004</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

// now every component in that UserContextProvider will have access to the
// use data