import React, { useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/dataContext";

const HomePage = () => {

  const { nameUser, setNameUser, moneyInAccount, setMoneyInAccount } = useContext(DataContext);
  const navigation = useNavigate();

  const confirmDelete = () => {
    const deleteUser = window.confirm('¿Esta seguro que desea borrar todos los datos de su cuenta?')
    return deleteUser;
  }
  
  const handleClick = () => {
    setNameUser('')
    setMoneyInAccount('')
    navigation('/')
  }

  return (
    <div>
      <nav>
        <h1>misFinanzas</h1>
        <p>{nameUser} ${moneyInAccount}</p>
        <Link to={"../HomePage"}>Home</Link>{" "}
        <Link to={"ForeignExchange"}>Divizas</Link>
        <button onClick={confirmDelete && handleClick}>Borrar Usuario</button>
      </nav>
      <Outlet />
    </div>
  );
};

export default HomePage;
