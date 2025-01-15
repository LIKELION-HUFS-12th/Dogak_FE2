import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import BookSearch from "./features/record/pages/BookSerach";
import ReviewWrite from "./features/record/pages/ReviewWrite";
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
        path: '/record/writereview',
       element: <ReviewWrite/>
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
            element: <p>이 페이지는 아직 준비중입니다.</p>
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