import React, { useState, useEffect, useContext, useReducer } from "react";
import dates from "../dates";
import { FinanceContext } from "../context/financeContext";
import { RowReducer } from "../reducers/RowReducer";
import RowIncomeAdd from "./RowIncomeAdd";
import RowExpenseAdd from "./RowExpenseAdd";
import Row from "./Row";


const init = () => {
  const dataIncome = localStorage.getItem("dataIncome");
  return dataIncome ? JSON.parse(dataIncome) : [];
};

const Date = (props) => {

  const [state, dispatch] = useReducer(RowReducer, [], init);

  useEffect(() => {
    localStorage.setItem("dataIncome", JSON.stringify(state));
  }, [state]);

    // const { amountPerDay } = useContext(FinanceContext);
    const [amount, setAmount] = useState(props.amount);

  const [active, setActive] = useState(false);
  const [actionAdd, setActionAdd] = useState("");
  const [expenses, setExpenses] = useState(0);

  const optionAdd = () => {
    switch (actionAdd) {
      case "income":
        return (
          <>
            <RowIncomeAdd dispatch={dispatch} setActionAdd={setActionAdd} />
            <button className="btn btn-danger mx-2" onClick={() => setActionAdd("")}>✘</button>
          </>
        );

      case "expenses":
        return (
          <>
            <RowExpenseAdd dispatch={dispatch} setActionAdd={setActionAdd} />
            <button className="btn btn-danger mx-2" onClick={() => setActionAdd("")}>✘</button>
          </>
        );

      default:
        return (
          <>
            <button className="btn btn-success m-2" onClick={() => setActionAdd("income")}>Ingreso</button>
            <button className="btn btn-danger m-2" onClick={() => setActionAdd("expenses")}>Gasto</button>
          </>
        );
    }
  };

  return (
    <>
      <div
        className="center flex"
        style={{
          width: "350px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <p> {props.nameDay} {props.date}</p>
        <p>${amount}</p>
      </div>
        <Row data={state} dispatch={dispatch} amountP={amount} />
      <div className="flex"></div>
      <div className="flex">
        {active && optionAdd()}
        <br />
      </div>
      <div className="flex">
        <button className="btn btn-info m-2" onClick={() => setActive(!active)}>✚</button>
      </div>
    </>
  );
};

export default Date;
