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
            <button>✚</button>
            <button onClick={() => setActionAdd("")}>✘</button>
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
            <button>✚</button>
            <button onClick={() => setActionAdd("")}>✘</button>
          </>
        );

      default:
        return (
          <>
            <button onClick={() => setActionAdd("income")}>Ingreso</button>
            <button onClick={() => setActionAdd("expenses")}>Gasto</button>
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
        <button onClick={() => setActive(!active)}>✚</button>
      </div>
    </>
  );
};

export default Date;
