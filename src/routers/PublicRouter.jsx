import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PublicRouter = ({ log }) => {
  
    return log ? 
      <Navigate to="/" /> 
      : 
      <>
        <Outlet />
      </>

  };

export default PublicRouter