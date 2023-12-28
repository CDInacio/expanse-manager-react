import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

interface Route {
  path: string;
  element: JSX.Element;
}

export const privateRoutes: Route[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export const publicRoutes: Route[] = [
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];
