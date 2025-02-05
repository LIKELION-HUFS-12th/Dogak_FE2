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
import SignupPage from "./features/auth/signup/SignupPage";
import BookRecord from "./features/record/pages/BookRecord";
import OnboardingPage from "./pages/Onboarding/OnboardingPage";
import HomePage from "./pages/home/HomePage";
import NotLoginedHome from "./pages/home/NotLoginedHome";
import NotLoginedLayOut from "./pages/NotLoginedLayOut";
import NoticePage from "./features/notice/NoticePage";
import MyPage from "./features/mypage/MyPage";
import Detail1 from "./features/board/temp/Detail1";
import Detail9 from "./features/board/temp/Detail9";


export default createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'home',
        element: <HomePage/>,
      },
      {
        path: '/record',
        element: <BookSearch/>},
      {
        path: '/record/writereview',
        element: <ReviewWrite/>
      }, 
      {
        path: '/record/pastreview',
        element: <BookRecord/>
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
            path: ':type/detail/1',
            element: <Detail1/>
          },
          {
            path: ':type/detail/9',
            element: <Detail9/>
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
      },
      {
        path: 'notice',
        element: <NoticePage/>
      },
      {
        path: 'myPage',
        element: <MyPage />
      }
    ]
  },
  {
    path: 'welcome',
    element: <OnboardingPage/>,
  },
  {
    path: 'welcome/home',
    element: <NotLoginedHome />
  },
  {
    path: '/',
    element: <NotLoginedLayOut />,
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
        element: <SignupPage />
      },
    ]
  }
]);