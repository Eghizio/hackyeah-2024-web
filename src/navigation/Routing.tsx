import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../App";
import { PrivateRoute } from "./PrivateRoute";
import { Auth } from "../pages/Auth/Auth";
import { Home } from "../pages/Home/Home";
import { Profile } from "../pages/Profile/Profile";
import { Benefits } from "../pages/Benefits/Benefits";
import { NotFound } from "../pages/NotFound/NotFound";
import { Projects } from "../pages/Projects/Projects";
import { ProjectDetails } from "../pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/benefits",
        element: (
          <PrivateRoute>
            <Benefits />
          </PrivateRoute>
        ),
      },
      {
        path: "/projects",
        element: (
          <PrivateRoute>
            <Projects />
          </PrivateRoute>
        ),
      },
      {
        path: "/projects/:projectId",
        element: (
          <PrivateRoute>
            <ProjectDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/wallet",
        children: [
          {
            path: "/wallet/top-up",
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
          },
          {
            path: "/wallet/withdraw",
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
          },
          {
            path: "/wallet/transactions",
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export const Routing = () => <RouterProvider router={router} />;
