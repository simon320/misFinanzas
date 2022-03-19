import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCalendar } from "../hooks/useCalendar";
import { useSelector, useDispatch } from "react-redux";

import { cleanLogout, createRegister } from "../redux/actions/dateRegister";
import { logout } from "../redux/actions/auth";
import Calendar from "../components/Calendar";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import ForeignExchange from "../components/ForeignExchange";
import { useRouteMatch } from "react-router-dom";
import { createAcount } from "../redux/actions/acount";


const HomePage = () => {
  const username = useSelector((state) => state.authReducer.displayName);
  const amount = useSelector((state) => state.acountReducer);
  const dispatch = useDispatch();

  console.log(amount)
  const handleAdd = () => {
    dispatch(createRegister());
  };

  // const navigation = useNavigate();

  // const confirmDelete = (callback) => {
  //   const deleteUser = window.confirm(
  //     "¿Esta seguro que desea borrar todos los datos de su cuenta?"
  //   );
  //   deleteUser && callback();
  // };

  let {path, url} = useRouteMatch();

  const handleLogout = () => {
    dispatch(cleanLogout())
    dispatch(logout());
  };


  return (
    <div>

      <h1>Home Page</h1>
      <button onClick={handleAdd}>Agregar</button>

      <nav>
        <h1>misFinanzas</h1>
        <p>{username}</p>
          <button className="btn btn-danger rigth" onClick={handleLogout}>
            Cerrar Seccion
          </button>
      </nav>

      <Link to={`${url}/calendario`}>Calendario</Link>{" "}
      <Link to={`${url}/divizas`}>Divizas</Link> 
      <br />

      <section>
        <Switch>
          <Route path={`${path}/divizas`} component={ForeignExchange} />
          <Route path={`${path}/calendario`} component={Calendar} />

          <Redirect to={`${url}/calendario`}/>
        </Switch>
      </section>

    </div>
  );
};

export default HomePage;
