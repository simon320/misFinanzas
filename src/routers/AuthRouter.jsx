import { Redirect, Routes, Route, Outlet, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const AuthRouter = () => {
  return (
    <div>
      HOla!
      <Outlet />
    </div>
  );
};

export default AuthRouter;
