{/*import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import BookSearch from "./features/record/pages/BookSerach";
import BoardPage from "./features/board/BoardPage";
import BoardList from "./features/board/pages/BoardList";

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
      },
      {
        path: '/board',
        element: <BoardPage />,
        children: [
          {
            index: true,
            element: <BoardList />
          },
          {
            path: 'list', 
            element: <BoardList />
          }
        ]
      }
    ]
  }
]);*/}

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import BookSearch from "./features/record/pages/BookSerach";
//import BoardPage from "./features/board/BoardPage";
//import BoardList from "./features/board/pages/BoardList";
import ReviewWrite from "./features/record/pages/ReviewWrite";

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
        element: <ReviewWrite/>
      }
        ]
      }

]);