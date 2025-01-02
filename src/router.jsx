import { createBrowserRouter } from "react-router-dom";
import BoardHome from "./features/board/BoardHome";
import MainLayout from "./MainLayout";
import BookSearch from "./features/record/pages/BookSerach";


export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/record',
        element: <BookSearch/>
      },
      {
        path: '/writereview',
        element: <h1>Not Yet</h1>
      }
    ]
  }
]);