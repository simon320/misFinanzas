import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/dataContext";

const StartingAcount = () => {
  const { nameUser, moneyInAccount, setMoneyInAccount } =
    useContext(DataContext);

  return (
    <div>
      <h2 style={{ fontSize: "15px" }}>StartingAcount</h2>
      <h1>¡Hola {nameUser}!</h1>
      <p>
        Para continuar, introduce el monto de dinero que tienes en este momento
        cuenta.(Luego podra agregar mas ingresos de dinero).
      </p>
      <form>
        <label>
          <input
            onChange={(e) => setMoneyInAccount(e.target.value)}
            value={moneyInAccount}
            type="number"
            placeholder="$0.00"
          />
        </label>
        <Link to="/HomePage">
          <button>Continuar</button>
        </Link>
      </form>
    </div>
  );
};

export default StartingAcount;
