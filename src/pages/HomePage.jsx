import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useCalendar } from "../hooks/useCalendar";
import { useSelector, useDispatch } from "react-redux";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config-firebase";

import { cleanLogout, createRegister } from "../redux/actions/dateRegister";
import { logout } from "../redux/actions/auth";
import Calendar from "../components/Calendar";
import { Redirect } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ForeignExchange from "../components/ForeignExchange";
import { useRouteMatch } from "react-router-dom";
import { editAcount } from "../redux/actions/acount";
import { NavigationRoute } from "workbox-routing";



const HomePage = () => {
  const username = useSelector((state) => state.authReducer.displayName);
  // const amount = useSelector((state) => state.acountReducer.user.amount);
  // const state = useSelector((state) => state.acountReducer.data);
  const dispatch = useDispatch();
// console.log(amount)
  const navigation = useNavigate();

  // const confirmDelete = (callback) => {
  //   const deleteUser = window.confirm(
  //     "¿Esta seguro que desea borrar todos los datos de su cuenta?"
  //   );
  //   deleteUser && callback();
  // };

    // let {path, url} = useRouteMatch();

  const handleLogout = () => {
    dispatch(cleanLogout())
    dispatch(logout());
    navigation("/auth/login")
  };

  const handleL = () => {
    dispatch(editAcount())
  }

  return (
    <div>

      <h1>Home Page</h1>

      <nav>
        <h1>misFinanzas</h1>
        <p>{username}</p>
        <p>
          {/* ${amount} */}
        </p>
          <button className="btn btn-danger rigth" onClick={handleLogout}>
            Cerrar Seccion
          </button>
          <button className="btn btn-danger rigth" onClick={handleL}>
            Cerr
          </button>
      </nav>

      <Link to="calendario">Calendario</Link>{" "}
      <Link to="divizas">Divizas</Link> 
      <br />

      <section>
        {/* <Routes>
          <Route path="divizas" element={<ForeignExchange/>} />
          <Route path="calendario" element={<Calendar/>} />

        <Navigate to="calendario"/>
        </Routes> */}
        <Outlet/> 
      </section>

    </div>
  );
};

export default HomePage;
