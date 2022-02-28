import React, { useState, useEffect, useContext, useReducer } from "react";
import dates from "../dates";
import { FinanceContext } from "../context/financeContext";
import { RowReducer } from "../reducers/RowReducer";
import RowIncomeAdd from "./RowIncomeAdd";
import RowExpenseAdd from "./RowExpenseAdd";
import Row from "./Row";
import { useLocalStorage } from "../hooks/useLocalStorage";


const init = () => {
  const dataIncome = localStorage.getItem("dataIncome");
  return dataIncome ? JSON.parse(dataIncome) : [];
};

const Date = (props) => {

  const [state, dispatch] = useReducer(RowReducer, [], init);

  useEffect(() => {
    localStorage.setItem("dataIncome", JSON.stringify(state));
  }, [state]);

  const [amountDay, setAmountDay] = useState(props.amountPerDay);

  const [active, setActive] = useState(false);
  const [actionAdd, setActionAdd] = useState("");
  const [expenses, setExpenses] = useState(0);

  const optionAdd = () => {
    switch (actionAdd) {
      case "income":
        return (
          <>
            <RowIncomeAdd dispatch={dispatch} setActionAdd={setActionAdd} date={props.date} />
            <button className="btn btn-danger mx-2" onClick={() => setActionAdd("")}>✘</button>
          </>
        );

      case "expenses":
        return (
          <>
            <RowExpenseAdd dispatch={dispatch} setActionAdd={setActionAdd} date={props.date} />
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
        <p> {props.nameDay} {props.value}</p>
        <p>${amountDay}</p>
      </div>

      <Row data={state} dispatch={dispatch} amountDay={amountDay} setAmountDay={setAmountDay} key={props.value} date={props.date} />

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
