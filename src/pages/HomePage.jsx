import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { DataContext } from "../context/dataContext";

const HomePage = () => {

  const { nameUser, moneyInAccount } = useContext(DataContext);

  return (
    <div>
      <nav>
        <h1>misFinanzas</h1>
        <p>{nameUser} ${moneyInAccount}</p>
        <Link to={"../HomePage"}>Home</Link>{" "}
        <Link to={"ForeignExchange"}>Divizas</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default HomePage;
