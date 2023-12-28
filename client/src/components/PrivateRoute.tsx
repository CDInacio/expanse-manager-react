import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navigation/Navbar";

const PrivateRoute = () => {
  const token = localStorage.getItem("userToken");
  const userData = JSON.parse(localStorage.getItem("userData")!);

  let isAuth = token && userData;

  return (
    <>
      {isAuth ? (
        <div>
          <header>
            <Navbar />
          </header>
          <Outlet />
        </div>
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
};

export default PrivateRoute;
