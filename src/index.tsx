import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import TravelJournalBoard from "./pages/travel-journal-board";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./pages/signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/board",
        element: <TravelJournalBoard />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// eslint-disable-next-line @typescript-eslint/no-floating-promises
reportWebVitals();
