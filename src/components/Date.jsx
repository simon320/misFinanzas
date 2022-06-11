import React, { useState } from "react";
import { useSelector } from "react-redux";
import Row from "./Row";
import RowIncomeAdd from "./RowIncomeAdd";
import RowExpenseAdd from "./RowExpenseAdd";


const Date = (props) => {
  const currentDate = useSelector((state) => state.registerReducer.dataRegister);

  const [active, setActive] = useState(false);
  const [actionAdd, setActionAdd] = useState("");

  const optionAdd = () => {
    switch (actionAdd) {
      case "income":
        return (
          <>
            <RowIncomeAdd date={props.date} />
            <button className="btn btn-danger mx-2" onClick={() => setActionAdd("")}>✘</button>
          </>
        );

      case "expense":
        return (
          <>
            <RowExpenseAdd date={props.date} />
            <button className="btn btn-danger mx-2" onClick={() => setActionAdd("")}>✘</button>
          </>
        );

      default:
        return (
          <>
            <button className="btn btn-success m-2" onClick={() => setActionAdd("income")}>Ingreso</button>
            <button className="btn btn-danger m-2" onClick={() => setActionAdd("expense")}>Gasto</button>
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
        <p>${props.amountPerDay}</p>
      </div>

      <Row currentDate={currentDate} date={props.date} />

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
