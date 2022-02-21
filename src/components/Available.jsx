import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/dataContext";

const Available = () => {
  const {
    viewOptionAvailable, setViewOptionAvailable,
    moneyInAccount, setMoneyInAccount,
    setAmountPerDay,
    savedMoney, setSavedMoney,
    daysForDistribute, setDaysForDistribute
  } = useContext(DataContext);
  const [viewOption, setViewOption] = useState("");
  const [moneyForSaved, setMoneyForSaved] = useState(0);
  
  const handleDistribute = () => {
    setAmountPerDay(parseInt(moneyInAccount) / daysForDistribute);
    setViewOptionAvailable(false);
    console.log(moneyInAccount)
  };
  
  const handleSaved = () => {
    setMoneyInAccount(parseInt(moneyInAccount) - moneyForSaved);
    setSavedMoney(parseInt(savedMoney) + parseInt(moneyForSaved));
    setTimeout(() => {
      setViewOptionAvailable(false);
    }, 100);
  };

  useEffect(()=>{
    setAmountPerDay(parseInt(moneyInAccount) / daysForDistribute);
  }, [moneyInAccount])

  const option = () => {
    switch (viewOption) {
      case "distribute":
        return (
          <>
            <label>
              ¿En cuantos dias queres distribuir el dinero?
              <input
                type="number"
                value={daysForDistribute}
                onChange={(e) => setDaysForDistribute(e.target.value)}
              />
              <button onClick={handleDistribute}>Distribuir</button>
            </label>
          </>
        );
      case "save":
        return (
          <>
            <label>
              ¿Cuanto dinero quieres ahorrar?
              <input
                type="number"
                value={moneyForSaved}
                onChange={(e) => setMoneyForSaved(e.target.value)}
              />
              <button onClick={handleSaved}>Ahorrar</button>
            </label>
          </>
        );
      default:
        return (
          <>
            <button onClick={() => setViewOption("distribute")}>
              Repartir en dias
            </button>
            <button onClick={() => setViewOption("save")}>Ahorrar</button>
          </>
        );
    }
  };

  return <div>{viewOptionAvailable && option()}</div>;
};

export default Available;
