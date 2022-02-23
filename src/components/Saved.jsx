import React, { useState, useContext, useEffect } from "react";
import { FinanceContext } from "../context/financeContext";

const Saved = () => {
  const {
    viewOptionAvailable, setViewOptionAvailable,
    viewOptionSaved, setViewOptionSaved,
    moneyInAccount, setMoneyInAccount,
    savedMoney, setSavedMoney,
    moneyInBadge, setMoneyInBadge,
    setAmountPerDay,
    daysForDistribute, setDaysForDistribute,
  } = useContext(FinanceContext);

  const [viewOption, setViewOption] = useState("");
  const [moneyForAccount, setMoneyForAccount] = useState(0);
  const [moneyForBadge, setMoneyForBadge] = useState(0);

   const handleTransferAccount = () => {
     setSavedMoney(parseInt(savedMoney) - parseInt(moneyForAccount));
     setMoneyInAccount(parseInt(moneyInAccount) + parseInt(moneyForAccount));
     setTimeout(() => {
       setViewOptionSaved(false);
     }, 250);
   };

   const handleTransferBadge = () => {
     setSavedMoney(parseInt(savedMoney) - parseInt(moneyForBadge));
     setMoneyInBadge(parseInt(moneyInBadge) + parseInt(moneyForBadge));
     setTimeout(() => {
       setViewOptionSaved(false);
     }, 250);
   };

  const handleTransfer = (moneyTransfer, confirmTransfer) => {
    savedMoney >= moneyTransfer ? confirmTransfer() : window.alert("No tienes esa cantidad de dinero ahorrado")
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
              <button className="btn btn-info m-2" onClick={()=> handleTransfer(moneyForAccount, handleTransferAccount)}>Distribuir</button>
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
              <button className="btn btn-info m-2" onClick={()=> handleTransfer(moneyForBadge, handleTransferBadge)}>Ahorrar</button>
            </label>
          </>
        );
      default:
        return (
          <>
            <button className="btn btn-info m-2" onClick={() => setViewOption("addToAccount")}>
              Agregar a disponible por dias
            </button>
            <button className="btn btn-info m-2" onClick={() => setViewOption("badge")}>
              Ahorrar en Divizas
            </button>
          </>
        );
    }
  };

  return <div>{viewOptionSaved && option()}</div>;
};

export default Saved;
