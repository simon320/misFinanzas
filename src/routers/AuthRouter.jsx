import { Redirect, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const AuthRouter = () => {
  return (
    <Routes>

      <Route path="login" element={<LoginPage/>} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
    // <Routes>
    //   <Route path="login" element={<LoginPage/>} />

    //   {/* <Redirect to="/auth/login" /> */}
    // </Routes>
  );
};

export default AuthRouter;
