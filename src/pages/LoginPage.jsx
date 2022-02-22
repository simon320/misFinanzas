import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FinanceContext } from "../context/financeContext";

const LoginPage = () => {
  const { nameUser, setNameUser } = useContext(FinanceContext)

  return (
    <div>
      <h2 style={{ fontSize: "15px" }}>LoginPage</h2>
      <h1>mis Finanzas</h1>
      <form>
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
      </form>
    </div>
  );
};

export default LoginPage;
