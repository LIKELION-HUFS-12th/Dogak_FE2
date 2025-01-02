import { createBrowserRouter } from "react-router-dom";
import BoardHome from "./features/board/BoardHome";
import MainLayout from "./MainLayout";
import BookSearch from "./features/record/pages/BookSerach";

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
        path: '/record',
        element: <BookSearch/>
        path: '/board',
        element: <BoardHome />
      }
    ]
  }
]);