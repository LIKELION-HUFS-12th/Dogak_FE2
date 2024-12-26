import { createBrowserRouter, Outlet } from "react-router-dom";
import Temp from "./pages(temp)/temp";

function MainLayout() {
  return (
    <div id="app">
      <h1>hello</h1>
      <Outlet />
    </div>
  );
}

export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <p>mainpage</p>
      },
      {
        path: '/temp',
        element: <Temp />
      }
    ]
  }
]);