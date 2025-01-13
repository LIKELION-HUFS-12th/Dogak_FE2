import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import BookSearch from "./features/record/pages/BookSerach";
import BoardPage from "./features/board/BoardPage";
import BoardListPage from "./features/board/pages/BoardListPage";
import BoardDetailPage from "./features/board/pages/BoardDetailPage";

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
            path: ':type',
            element: <BoardListPage />,
          },
          {
            path: 'group/detail/:id',
            element: <BoardDetailPage />,
          },
          {
            path: 'review/detail/:id',
            element: <BoardDetailPage />,
          },
          {
            path: 'group/write',
            element: <p>group게시판 쓰는 페이지</p>
          },
          {
            path: 'review/write',
            element: <p>review게시판 쓰는 페이지</p>
          },
          {
            path: 'my',
            element: <p>내 개시판</p>
          }
        ]
      }
    ]
  }
]);