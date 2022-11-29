import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { CtxProvider } from "./context";
import App from "./App";
import ErrorPage from "./errorPage";
import "./index.css";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Photos />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CtxProvider>
      <RouterProvider router={route} />
    </CtxProvider>
  </React.StrictMode>
);
