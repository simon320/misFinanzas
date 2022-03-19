import React, { useState, useContext, useEffect } from "react";
import { FinanceContext } from "../context/financeContext";

//redux
import { useSelector, useDispatch } from "react-redux";
import { editAmount, editSaving } from "../redux/actions/actions";

const Available = () => {
  const amount = useSelector((state) => state.currentUser.amount);
  const saving = useSelector((state) => state.currentUser.saving);
  const dispatch = useDispatch();



  const {
    viewOptionAvailable,
    setViewOptionAvailable,
    setAmountPerDay,
    daysForDistribute,
    setDaysForDistribute,
  } = useContext(FinanceContext);

  const [viewOption, setViewOption] = useState("");
  const [moneyForSaved, setMoneyForSaved] = useState("");


   //////////// Distirubucion del dinero en dias ///////////// TERMINAR!!!!!!!!!
  const handleDistribute = () => {
    // dispatch(editAmount(parseInt(amount) / daysForDistribute));
    setViewOptionAvailable(false);
  };


  //////////// Transferir dinero de cuenta a los ahorros /////////////
  const saved = (moneyForSaved) => {
    const currentAmount = parseInt(amount) - parseInt(moneyForSaved)
    const currentSave = saving ? saving + parseInt(moneyForSaved) : parseInt(moneyForSaved);
    dispatch(editAmount(currentAmount));
    dispatch(editSaving(currentSave));
    setTimeout(() => {
      setViewOptionAvailable(false);
    }, 250);
  };

  const handleSaved = (amount, money, save) => {
    parseInt(amount) >= parseInt(money)
      ? save(parseInt(money))
      : window.alert("No tienes esa cantidad de dinero en la cuenta");
  };

  // useEffect(() => {
  //   setAmountPerDay(parseInt(amount) / daysForDistribute);
  // }, [amount]);

  const option = () => {
    switch (viewOption) {
      case "distribute":
        return (
          <>
            <label>
              ¿En cuantos dias queres distribuir el dinero?
              <input
                type="number"
                placeholder="Selecciona una fecha"
                value={daysForDistribute}
                onChange={(e) => setDaysForDistribute(e.target.value)}
              />
              <button className="btn btn-info m-2" onClick={handleDistribute}>
                Distribuir
              </button>
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
                placeholder="$00.0"
                value={moneyForSaved}
                onChange={(e) => setMoneyForSaved(e.target.value)}
              />
              <button
                className="btn btn-info m-2"
                onClick={() => handleSaved(amount, saved, moneyForSaved)}
              >
                Ahorrar
              </button>
            </label>
          </>
        );
      default:
        return (
          <>
            <button
              className="btn btn-info m-2"
              onClick={() => setViewOption("distribute")}
            >
              Repartir en dias
            </button>
            <button
              className="btn btn-info m-2"
              onClick={() => setViewOption("save")}
            >
              Ahorrar
            </button>
          </>
        );
    }
  };

  return <div>{viewOptionAvailable && option()}</div>;
};

export default Available;
