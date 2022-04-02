import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import StartingAcount from "../pages/StartingAcount";


const PrivateRouter = ({ log }) => {
  const [logAcount, setLogAcount] = useState(false);

  const acountUser = useSelector((state) => state.acountReducer.user.amount);

  useEffect(()=>{
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
