import React, { useState, useContext, useEffect } from "react";
import { FinanceContext } from "../context/financeContext";
import { useSelector, useDispatch } from "react-redux";
import { editAmount, editSaving, readAcount } from "../redux/actions/acount";
import { loadDataAcount } from "../helpers/loadDataAcount";

const Available = ({confirm, setConfirm}) => {
  const uid = useSelector((state) => state.authReducer.uid);
  const amount = useSelector((state) => state.acountReducer.user.amount);
  const saving = useSelector((state) => state.acountReducer.user.saved);

  const dispatch = useDispatch();

  const {
    viewOptionAvailable,
    setViewOptionAvailable,
    daysForDistribute,
    setDaysForDistribute,
  } = useContext(FinanceContext);

  const [viewOption, setViewOption] = useState("");
  const [moneyForSaved, setMoneyForSaved] = useState("");

  //////////// Transferir dinero de cuenta a los ahorros /////////////
  const saved = (moneyForSaved) => {
    const currentAmount = parseInt(amount) - parseInt(moneyForSaved);
    const currentSave = saving
      ? saving + parseInt(moneyForSaved)
      : parseInt(moneyForSaved);
      console.log(saving)

    dispatch(editAmount(currentAmount));
    dispatch(editSaving(currentSave));

    setConfirm(!confirm)
    
    setViewOptionAvailable(false);
  };

  const handleSaved = async (amountAcount, moneySave, save) => {
    parseInt(amountAcount) >= parseInt(moneySave)
      ? save(parseInt(moneySave))
      : window.alert("No tienes esa cantidad de dinero en la cuenta");

    // const dataAcount = await loadDataAcount(userId);
    // dispatch(readAcount(dataAcount));
  };

  // useEffect(() => {
  //   console.log(amount)
  //   setMoneyAvailable(amount);
  // }, [amount]);

  //////////// Distirubucion del dinero en dias ///////////// TERMINAR!!!!!!!!!
  const handleDistribute = () => {
    // dispatch(editAmount(parseInt(amount) / daysForDistribute));
    setViewOptionAvailable(false);
  };



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
                onClick={() => handleSaved(amount, moneyForSaved, saved)}
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
};;

export default Available;
