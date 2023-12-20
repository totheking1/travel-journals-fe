import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import List from "./pages/travel-journal/list";
import CreateTravelJournal from "./pages/travel-journal/create";
import reportWebVitals from "./reportWebVitals";
import SignIn from "./pages/signin";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/board",
        element: <List />,
      },
      {
        path: "/board/create",
        element: <CreateTravelJournal />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignIn />,
  },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// eslint-disable-next-line @typescript-eslint/no-floating-promises
reportWebVitals();
