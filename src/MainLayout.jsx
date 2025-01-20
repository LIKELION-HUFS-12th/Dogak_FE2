import { Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react'
import BottomNav from "./components/BottomNav";
import "./index.css";

function MainLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('access')

    if (data) {
      navigate('/home')
    } else {
      navigate('/welcome')
    }
  }, [])

  return (
    <div id="app">
      <Outlet />
      <BottomNav />
    </div>
  )
}

export default MainLayout
