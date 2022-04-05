import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { firebase } from "../firebase/config-firebase";

import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { loadDataRegister } from "../helpers/loadDataRegister";
import { loadDataAcount } from "../helpers/loadDataAcount";
import { login } from "../redux/actions/auth";
import { readRegister } from "../redux/actions/dateRegister";
import { readAcount } from "../redux/actions/acount";
import { loadDataAcountSnap } from "../helpers/loadDataAcountSnap";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));

        const dataRegister = await loadDataRegister(user.uid);
          console.log(dataRegister)
          dispatch(readRegister(dataRegister));
          
          const dataSnap = loadDataAcountSnap(user.uid);
          console.log(dataSnap, "De AppRouter")
          // dispatch(readAcount(dataSnap));
          const dataAcount = await loadDataAcount(user.uid);
          console.log(dataAcount)
          dispatch(readAcount(dataAcount));
        
        setLog(true);

      } else {
        setLog(false);
      }
      console.log("appRouter Clg")

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
