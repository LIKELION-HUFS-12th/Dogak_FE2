import { Outlet } from "react-router-dom";
import React from 'react'
import BottomNav from "./components/BottomNav";

function MainLayout() {
  return (
    <div id="app">
      <Outlet />
      <BottomNav />
    </div>
  )
}

export default MainLayout
