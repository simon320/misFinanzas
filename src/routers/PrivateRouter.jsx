import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StartingAcount from "../pages/StartingAcount";
import { firebase } from "../firebase/config-firebase";
import { loadDataAcount } from "../helpers/loadDataAcount";
import { readAcount } from "../redux/actions/acount";



// const PrivateRouter = ({ log, children }) => {

//   return log ? children : <Navigate to="/auth/login" />;

// };

const PrivateRouter = ({ log }) => {
  const [logAcount, setLogAcount] = useState(false);
  const dispatch = useDispatch();


  const acountUser = useSelector((state) => state.acountReducer.user.amount);
  console.log(acountUser)

  useEffect(()=>{

    if (acountUser == undefined) {
      setLogAcount(false)
    } else {
      setLogAcount(true)
    }
    if (acountUser == undefined) {
      setLogAcount(false)
    } else {
      setLogAcount(true)
    }

    
  }, [acountUser])

  return log ? 
    <>
      {
        logAcount ?
          <HomePage /> 
          :
          <StartingAcount />
      }
    </> 
    : <Navigate to="/auth/login" />

    }

export default PrivateRouter;
