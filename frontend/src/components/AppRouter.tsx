import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutRoute from "../routes/AboutRoute";
import HomeRoute from "../routes/HomeRoute";
import Layout from "../routes/Layout";
import LinksRoute from "../routes/LinksRoute";
import PostRoute from "../routes/PostRoute";
import ProjectsRoute from "../routes/ProjectsRoute";
import AdminRoute from "../routes/AdminRoute";
import CreatePostRoute from "../routes/AdminCreatePostsRoute";
import AdminPostsRoute from "../routes/AdminPostsRoute";
import AdminCreatePostsRoute from "../routes/AdminCreatePostsRoute";
import AdminListPostsRoute from "../routes/AdminListPostsRoute";
import AdminEditPostsRoute from "../routes/AdminEditPostsRoute";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomeRoute />,
        },
        {
          path: "/post/:id",
          element: <PostRoute />,
        },
        {
          path: "/about",
          element: <AboutRoute />,
        },
        {
          path: "/links",
          element: <LinksRoute />,
        },
        {
          path: "/projects",
          element: <ProjectsRoute />,
        },

        {
          path: "/admin",
          element: <AdminRoute />,
          children: [
            {
              path: "/admin/posts",
              element: <AdminPostsRoute />,
              children: [
                {
                  path: "/admin/posts/create",
                  element: <AdminCreatePostsRoute />,
                },
                {
                  path: "/admin/posts/list",
                  element: <AdminListPostsRoute />,
                },
                {
                  path: "/admin/posts/edit/:id",
                  element: <AdminEditPostsRoute />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
