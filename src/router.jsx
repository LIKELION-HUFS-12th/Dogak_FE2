import { createBrowserRouter, Outlet } from "react-router-dom";


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
        path: '/temp',
        element: <h1>Temp</h1>
      }
    ]
  }
]);