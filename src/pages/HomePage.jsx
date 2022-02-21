import React, { useContext, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Available from "../components/Available";
import { DataContext } from "../context/dataContext";

const HomePage = () => {
  const {
    nameUser,
    setNameUser,
    moneyInAccount,
    setMoneyInAccount,
    viewOptionAvailable,
    setViewOptionAvailable,
    savedMoney,
    setSavedMoney,
    setAmountPerDay
  } = useContext(DataContext);
  const navigation = useNavigate();

  // const confirmDelete = () => {
  //     const deleteUser = window.confirm('¿Esta seguro que desea borrar todos los datos de su cuenta?')
  //   return deleteUser;
  // }

  const handleDelete = () => {
    setNameUser("");
    setMoneyInAccount(0);
    setSavedMoney(0);
    setAmountPerDay(0);
    navigation("/");
  };

  return (
    <div>
      <nav>
        <h1>misFinanzas</h1>
        <p>{nameUser}</p>
        <button onClick={() => setViewOptionAvailable(!viewOptionAvailable)}>
         ${moneyInAccount}
        </button>{" "}
        <button>
          ${savedMoney}
        </button>{" "}
        {viewOptionAvailable && <Available setViewOptionAvailable={setViewOptionAvailable}/>}
        <Link to={"../HomePage"}>Home</Link>{" "}
        <Link to={"ForeignExchange"}>Divizas</Link>
        <button onClick={handleDelete}>Borrar Usuario</button>
      </nav>
      <Outlet />
    </div>
  );
};

export default HomePage;
