import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  useNavigate,
  Navigate,
} from "react-router-dom";
import HomePage from "../pages/HomePage";

import { useDispatch, useSelector } from "react-redux";

import { firebase } from "../firebase/config-firebase";

import { login } from "../redux/actions/auth";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import StartingAcount from "../pages/StartingAcount";
import { loadDataRegister } from "../helpers/loadDataRegister";
import { loadDataAcount } from "../helpers/loadDataAcount";
import { cleanLogout, readRegister } from "../redux/actions/dateRegister";
import { readAcount } from "../redux/actions/acount";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);
  // const [logAcount, setLogAcount] = useState(false);

  // const acountUser = useSelector((state) => state.acountReducer.user.amount);
  // console.log(acountUser)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));

        const dataRegister = await loadDataRegister(user.uid);
          dispatch(readRegister(dataRegister));

        const dataAcount = await loadDataAcount(user.uid);
          dispatch(readAcount(dataAcount));
        
        setLog(true);

      } else {
        setLog(false);
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        
        <Route path="/auth" log={log} element={<PublicRouter log={log} />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route path="/*" log={log} element={<PrivateRouter log={log} />}/>

      </Routes>
    </Router>
  );
};

export default AppRouter;
