import React from 'react'
import TopNav from './components/TopNav'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <TopNav />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
