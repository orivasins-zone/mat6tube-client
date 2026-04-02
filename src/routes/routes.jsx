import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Error404 from "../Pages/Error404/Error404";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
