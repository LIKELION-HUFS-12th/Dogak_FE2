import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    //globalStyle컴포넌트 추가 가능
    <RouterProvider router={router} />
  </React.StrictMode>
);