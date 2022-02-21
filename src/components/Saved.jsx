import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/dataContext";

const Saved = () => {
  const {
    viewOptionAvailable, setViewOptionAvailable,
    viewOptionSaved, setViewOptionSaved,
    moneyInAccount, setMoneyInAccount,
    savedMoney, setSavedMoney,
    moneyInBadge, setMoneyInBadge,
    setAmountPerDay,
    daysForDistribute, setDaysForDistribute,
  } = useContext(DataContext);

  const [viewOption, setViewOption] = useState("");
  const [moneyForAccount, setMoneyForAccount] = useState(0);
  const [moneyForBadge, setMoneyForBadge] = useState(0);

  const handleTransfer = (transfer, account, amountAccount) => {
    setSavedMoney(parseInt(savedMoney) - parseInt(transfer));
    account(parseInt(amountAccount) + parseInt(transfer));
    setTimeout(() => {  
      setViewOptionSaved(false)
    }, 250);
  };

  useEffect(() => {
    setAmountPerDay(parseInt(moneyInAccount) / daysForDistribute);
  }, [moneyInAccount]);

  const option = () => {
    switch (viewOption) {
      case "addToAccount":
        return (
          <>
            <label>
              ¿Cuanto quieres transferir a la cuenta principal?
              <input
                type="number"
                value={moneyForAccount}
                onChange={(e) => setMoneyForAccount(e.target.value)}
              />
              <button onClick={()=> handleTransfer(moneyForAccount, setMoneyInAccount, moneyInAccount)}>Distribuir</button>
            </label>
          </>
        );
      case "badge":
        return (
          <>
            <label>
              ¿Cuanto dinero quieres ahorrar?
              <input
                type="number"
                value={moneyForBadge}
                onChange={(e) => setMoneyForBadge(e.target.value)}
              />
              <button onClick={()=> handleTransfer(moneyForBadge, setMoneyInBadge, moneyInBadge)}>Ahorrar</button>
            </label>
          </>
        );
      default:
        return (
          <>
            <button onClick={() => setViewOption("addToAccount")}>
              Agregar a disponible por dias
            </button>
            <button onClick={() => setViewOption("badge")}>
              Ahorrar en Divizas
            </button>
          </>
        );
    }
  };

  return <div>{viewOptionSaved && option()}</div>;
};

export default Saved;
