import React, { useState, useContext, useEffect } from "react";
import { FinanceContext } from "../context/financeContext";

const Available = () => {
  const {
    viewOptionAvailable, setViewOptionAvailable,
    moneyInAccount, setMoneyInAccount,
    setAmountPerDay,
    savedMoney, setSavedMoney,
    daysForDistribute, setDaysForDistribute
  } = useContext(FinanceContext);

  const [viewOption, setViewOption] = useState("");
  const [moneyForSaved, setMoneyForSaved] = useState(0);
  
  const handleDistribute = () => {
    setAmountPerDay(parseInt(moneyInAccount) / daysForDistribute);
    setViewOptionAvailable(false);
    console.log(moneyInAccount)
  };

  const saved = () => {
    setMoneyInAccount(parseInt(moneyInAccount) - moneyForSaved);
    setSavedMoney(parseInt(savedMoney) + parseInt(moneyForSaved));
    setTimeout(() => {
      setViewOptionAvailable(false);
    }, 100)
  }

  const handleSaved = (save) => {
    console.log(moneyInAccount)
   moneyInAccount >= moneyForSaved ? save() : window.alert("No tienes esa cantidad de dinero en la cuenta")
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
              <button className="btn btn-info m-2" onClick={handleDistribute}>Distribuir</button>
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
              <button className="btn btn-info m-2" onClick={()=> handleSaved(saved)}>Ahorrar</button>
            </label>
          </>
        );
      default:
        return (
          <>
            <button className="btn btn-info m-2" onClick={() => setViewOption("distribute")}>
              Repartir en dias
            </button>
            <button className="btn btn-info m-2" onClick={() => setViewOption("save")}>Ahorrar</button>
          </>
        );
    }
  };

  return <div>{viewOptionAvailable && option()}</div>;
};

export default Available;
