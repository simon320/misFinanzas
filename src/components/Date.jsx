import React, { useState } from "react";
import dates from "../dates";

const Date = () => {
  const [active, setActive] = useState(false);
  const [actionAdd, setActionAdd] = useState("");
  const [expenses, setExpenses] = useState(0);

  const optionAdd = () => {
    switch (actionAdd) {
      case "income":
        return (
          <>
            <label>
              Ingreso:
              <input type="text" placeholder="Descripcion" />
            </label>
            <label>
              $
              <input type="number" placeholder="00.0" />
            </label>
            <button className="btn btn-success mx-2">✚</button>
            <button className="btn btn-danger mx-2" onClick={() => setActionAdd("")}>✘</button>
          </>
        );

      case "expenses":
        return (
          <>
            <label>
              Gasto:
              <input type="text" placeholder="Descripcion" />
            </label>
            <label>
              $
              <input
                type="number"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
                placeholder="00.0"
              />
            </label>
            <button className="btn btn-success mx-2">✚</button>
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
        <p> {dates[0].date}</p>
        <p>${(dates[0].amountAvailable) - expenses}</p>
      </div>
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
