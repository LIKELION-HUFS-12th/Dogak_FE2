import React from 'react'
import '../index.css'
import { Outlet } from 'react-router-dom'

function NotLoginedLayOut() {
  return (
    <div id='app'>
      <Outlet />
    </div>
  )
}

export default NotLoginedLayOut
