import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import Home from "./context/Home/Home";
import ErrorPage from "./context/ErrorPage/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
