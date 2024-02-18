import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import NotFound from "../pages/not-found";
import MainLayout from "../layouts/main";
import Messages from "../pages/messages";
import Lists from "../pages/lists";
import Communuties from "../pages/communuties";
import Premium from "../pages/premium";
import Profile from "../pages/profile";
import Bookmarks from "../pages/bookmarks";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },

      {
        path: "/messages",
        element: <Messages />,
      },

      {
        path: "/lists",
        element: <Lists />,
      },

      {
        path: "/bookmakrs",
        element: <Bookmarks />,
      },

      {
        path: "/communuties",
        element: <Communuties />,
      },

      {
        path: "/premium",
        element: <Premium />
      },

      {
        path: "/profile",
        element: <Profile />
      },

      {
        path: "/more",
        element: <Premium />
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
