import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";

{/*function MainLayout() {
  return (
    <div id="app">
      <h1>hello</h1>
      <Outlet />
    </div>
  );
}*/}

export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/temp',
        element: <h1>Temp</h1>
      }
    ]
  }
]);