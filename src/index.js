import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogListPage from "./pages/BlogListPage";
import BlogPage from "./pages/BlogPage";
import AuthorPage from "./pages/AuthorPage";

const router = createBrowserRouter([
  {
    path:"/",
    element:<BlogListPage/> ,
  },
  {
    path:"/blog",
    element:<BlogPage/>,
  },
  {
    path:"/author",
    element:<AuthorPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
