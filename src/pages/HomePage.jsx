import React from "react";
import { Outlet, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <nav>
        <h1>misFinanzas</h1>
        <Link to={"../HomePage"}>Home</Link>{" "}
        <Link to={"ForeignExchange"}>Divizas</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default HomePage;
