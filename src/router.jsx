import { createBrowserRouter } from "react-router-dom";
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
      }
    ]
  }
]);