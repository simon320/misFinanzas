import React from 'react'
import { Navigate } from 'react-router-dom';

const PublicRouter = ({ log, children }) => {
  
    return log ? <Navigate to="/" /> : children;
    // <Route {...resto} component={(props)=>
    //     log ? <Route to="/" /> : <Component {...props} />
    // } />
  };

export default PublicRouter