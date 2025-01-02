import { createBrowserRouter } from "react-router-dom";
import Temp from "./pages(temp)/temp";
import BoardHome from "./features/board/BoardHome";
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
        element: <Temp />
      },
      {
        path: '/board',
        element: <BoardHome />
      }
    ]
  }
]);