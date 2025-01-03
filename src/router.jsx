import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import BookSearch from "./features/record/pages/BookSerach";
import BoardPage from "./features/board/BoardPage";
import BoardListPage from "./features/board/pages/BoardListPage";

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
            element: <BoardListPage />
          },
          {
            path: 'group',
            element: <BoardListPage />
          },
          {
            path: 'review',
            element: <BoardListPage />
          },
          {
            path: ':id',
            element: <p>아직 개발중</p>
          }
        ]
      }
    ]
  }
]);