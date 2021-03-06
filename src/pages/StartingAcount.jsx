import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createAcount } from "../redux/actions/acount";

const StartingAcount = () => {
  const username = useSelector((state) => state.authReducer.displayName);

  // const navigation = useNavigate()

  const [moneyInAccount, setMoneyInAccount] = useState({
    amount: 0,
  });

  const { amount } = moneyInAccount;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMoneyInAccount({
      ...moneyInAccount,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    dispatch(createAcount(username, amount));
  };

  return (
    <div className="container">
      <h1 className="title">¡Hola {username}!</h1>
      <p className="p-description">
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
            className="input"
            placeholder="$0.00"
          />
        </label>
        <Link to="/home">
          <button className="button" onClick={handleClick}>
            Crear
          </button>
        </Link>
      </form>
    </div>
  );
};

export default StartingAcount;
