import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";

import { useDispatch } from "react-redux";
import { firebase } from "../firebase/config-firebase";
import { login } from "../redux/actions/auth";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import StartingAcount from "../pages/StartingAcount";
import { loadDataRegister } from "../helpers/loadDataRegister";
import { loadDataAcount } from "../helpers/loadDataAcount";
import { readRegister } from "../redux/actions/dateRegister";
import { readAcount } from "../redux/actions/acount";

const AppRouter = () => {
  const dispatch = useDispatch()

  const [log, setLog] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged( async (user) => {

      if(user){
        dispatch(login(user.uid, user.displayName))
        setLog(true)
        const dataRegister = await loadDataRegister(user.uid)
        dispatch(readRegister(dataRegister))
        const dataAcount = await loadDataAcount(user.uid)
        dispatch(readAcount(dataAcount))
      } else {
        setLog(false)
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <PublicRouter path="/auth" log={log} component={AuthRouter} />
        <PrivateRouter exact path="/" log={log} component={StartingAcount} />
        <PrivateRouter path="/home" log={log} component={HomePage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
