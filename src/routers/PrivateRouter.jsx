import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ log, children }) => {

  return log ? children : <Navigate to="/auth" />;
  // <Route {...resto} component={(props)=>
  //     log ? <Route to="/" /> : <Component {...props} />
  // } />
};

export default PrivateRouter;
