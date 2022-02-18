import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/dataContext";
import { useLocalStorage } from '../hooks/useLocalStorage'

const LoginPage = () => {
  const { nameUser, setNameUser } = useContext(DataContext)
  
  useLocalStorage('nameUser', '')

  return (
    <div>
      <h2 style={{ fontSize: "15px" }}>LoginPage</h2>
      <h1>mis Finanzas</h1>
      <label>
        <input
          onChange={(e) => setNameUser(e.target.value)}
          value={nameUser}
          type="text"
          placeholder="Introduzca su nombre"
        />
      </label>
      <Link to="/StartingAcount">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default LoginPage;
