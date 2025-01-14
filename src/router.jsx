import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import BookSearch from "./features/record/pages/BookSerach";
import BoardPage from "./features/board/BoardPage";
import BoardListPage from "./features/board/pages/BoardListPage";
import BoardDetailPage from "./features/board/pages/BoardDetailPage";
import BoardWritePage from "./features/board/pages/BoardWritePage";
import CompletePage from "./features/board/pages/CompletePage";

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
            path: ':type/detail/:id',
            element: <BoardDetailPage />,
          },
          {
            path: 'group/write',
            element: <BoardWritePage />
          },
          {
            path: 'review/write',
            element: <BoardWritePage />
          },
          {
            path: 'my',
            element: <p>내가 쓴 글</p>
          },
          {
            path: 'complete',
            element: <CompletePage/>
          }
        ]
      }
    ]
  }
]);