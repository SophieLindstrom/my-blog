import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "../routes/HomeRoute";
import PostRoute from "../routes/PostRoute";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRoute />,
    },
    {
      path: "post/:id",
      element: <PostRoute />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
