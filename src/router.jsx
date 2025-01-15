import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import BookSearch from "./features/record/pages/BookSerach";
import ReviewWrite from "./features/record/pages/ReviewWrite";
import BoardPage from "./features/board/BoardPage";
import BoardListPage from "./features/board/pages/BoardListPage";
import BoardDetailPage from "./features/board/pages/BoardDetailPage";
import BoardWritePage from "./features/board/pages/BoardWritePage";
import CompletePage from "./features/board/pages/CompletePage";
import LoginPage from "./features/auth/login/LoginPage";


export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/login/find',
        element: <p>아직 준비중입니다</p>,
      },
      {
        path: '/signup',
        element: <div>회원가입 페이지입니다</div>
      },
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