import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createAcount } from "../redux/actions/acount";

const StartingAcount = () => {
  const username = useSelector((state) => state.authReducer.displayName);
  
  const [ moneyInAccount, setMoneyInAccount ] = useState({
    amount: 0
  });

  const { amount } = moneyInAccount
  const amountt = useSelector((state) => state.createAcount);

  
  console.log(amountt)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMoneyInAccount({
      ...moneyInAccount,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
    dispatch(createAcount(moneyInAccount))
  }

  return (
    <div>
      <h2 style={{ fontSize: "15px" }}>StartingAcount</h2>
      <h1>¡Hola {username}!</h1>
      <p>
        Para continuar, introduce el monto de dinero que tienes en este momento
        cuenta.(Luego podra agregar mas ingresos de dinero).
      </p>
      <form>
        <label>
          <input
            onChange={handleChange}
            value={amount}
            name="amount"
            type="number"
            placeholder="$0.00"
          />
        </label>
          <button
            type="button"
            className="btn btn-info m-2"
            onClick={handleClick}
          >
            Continuar
          </button>
          <Link to="/home">ir</Link>
      </form>
    </div>
  );
};

export default StartingAcount;
