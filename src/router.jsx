import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path:'/',
    element: <h1>hello</h1>,
    children: [
      {
        path: "/",
        element: <p>mainpage</p>
      }
      
    ]
  }
])