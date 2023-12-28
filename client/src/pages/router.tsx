import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import { privateRoutes } from "../routes";
import Signin from "./Signin";
import Signup from "./Signup";

const Router = () => {
  const userData = localStorage.getItem("userData");

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        {privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>

      <Route
        path="/signin"
        element={userData ? <Navigate to="/" /> : <Signin />}
      />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Router;
