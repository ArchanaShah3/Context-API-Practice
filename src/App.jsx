import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

export default function App() {
  return (
    <UserContextProvider >
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-6">
        Learning Context API with React
      </h1>

      <Login />
      <Profile />
    </UserContextProvider>
  )
}
