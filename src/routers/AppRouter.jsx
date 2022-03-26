import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Redirect, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";

import { useDispatch, useSelector } from "react-redux";

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
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Calendar from "../components/Calendar";
import ForeignExchange from "../components/ForeignExchange";



const AppRouter = () => {
  const dispatch = useDispatch()

  const [log, setLog] = useState(false)
  const amount = useSelector((state) => state.acountReducer.user);
  console.log(amount)

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
      <Routes>
        <Route path="/auth" log={log} element={<AuthRouter />} >
            <Route path="login" element={<LoginPage/>} />
            <Route path="register" element={<RegisterPage/>} />
        </Route>

        <Route path="/home" element={<HomePage />}>
          <Route path="calendario" element={<Calendar />}/>
          <Route path="divizas" element={<ForeignExchange />}/>
        </Route>
          {/* <Route path="/" element={<StartingAcount />} >
          </Route> */}
            {/* <Route path="/auth" log={log} element={<AuthRouter />} /> 
            :
            <Route path="/" element={<StartingAcount />} >
                <Route path="home" log={log} element={<HomePage />} />
            </Route> */}

      </Routes>
    </Router>


    // <Router>
    //   <Switch>
    //     <PublicRouter path="/auth" log={log} component={AuthRouter} />
    //     <PrivateRouter exact path="/" log={log} component={StartingAcount} />
    //     <PrivateRouter path="/home" log={log} component={HomePage} />
    //   </Switch>
    // </Router>
  );
};

export default AppRouter;
