import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/dataContext";

const LoginPage = () => {

 const { setNameUser } = useContext(DataContext);

 const handleChange = (e) => {
    setNameUser(e.target.value);
 }

  return (
    <div>
      <h2 style={{ fontSize: "15px" }}>LoginPage</h2>
      <h1>mis Finanzas</h1>
      <label>
        <input type="text" placeholder="Introduzca su nombre"  />
      </label>
      <Link to="/StartingAcount">
        <button onChange={handleChange} >Login</button>
      </Link>
    </div>
  );
};

export default LoginPage;
