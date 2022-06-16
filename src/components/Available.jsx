import React, { useState, useContext, useEffect, useRef } from "react";
import { FinanceContext } from "../context/financeContext";
import { useSelector, useDispatch } from "react-redux";
import { editAmount, editAmountPerDay, editSaving, readAcount } from "../redux/actions/acount";



const Available = () => {
  const amount = useSelector((state) => state.acountReducer.user.amount);
  const saving = useSelector((state) => state.acountReducer.user.saved);
  const dispatch = useDispatch();

  const {
    viewOptionAvailable,
    setViewOptionAvailable,
    confirm, setConfirm,
    daysForDistribute,
    setDaysForDistribute,
    fromDaySelected,
    setFromDaySelected,
    untilDaySelected, 
    setUntilDaySelected
  } = useContext(FinanceContext);

  const [viewOption, setViewOption] = useState("");
  const [moneyForSaved, setMoneyForSaved] = useState("");

  //////////// Transferir dinero de cuenta a los ahorros /////////////
  const saved = (moneyForSaved) => {
    const currentAmount = parseInt(amount) - parseInt(moneyForSaved);
    const currentSave = saving
      ? saving + parseInt(moneyForSaved)
      : parseInt(moneyForSaved);

    dispatch(editAmount(currentAmount));
    dispatch(editSaving(currentSave));
    dispatch(editAmountPerDay(Math.round(currentAmount / daysForDistribute)));

    setConfirm(!confirm)
    setViewOptionAvailable(false);
  };

  const handleSaved = (amountAcount, moneySave, save) => {
    parseInt(amountAcount) >= parseInt(moneySave)
      ? save(parseInt(moneySave))
      : window.alert("No tienes esa cantidad de dinero en la cuenta");
  };

  //////////// Distirubucion del dinero en dias /////////////
  function dayInMonth(m, y) {
    return new Date(y, m, 0).getDate();
  }

  const handleDistribute = () => {
    const [, mI, dI] = fromDaySelected.split("-")
    const [yE, mE, dE] = untilDaySelected.split("-")
    const dayInitial = parseInt(dI);
    const monthInitial = parseInt(mI);
    const dayEnd = parseInt(dE);
    const monthEnd = parseInt(mE);
    const yearEnd = parseInt(yE);

    const currentMonthDays = dayInMonth(monthEnd, yearEnd)

    if (monthInitial === monthEnd) {
      setDaysForDistribute(dayEnd - (dayInitial - 1))
      dispatch(editAmountPerDay(Math.round(parseInt(amount) / daysForDistribute)))
      setTimeout(()=>{
        setConfirm(!confirm)
        setViewOptionAvailable(false);
      },100)
    } 
    
    else if ((monthInitial +1) === monthEnd){
      setDaysForDistribute((currentMonthDays - (dayInitial - 1)) + dayEnd)
      dispatch(editAmountPerDay(Math.round(parseInt(amount) / daysForDistribute)))
      setTimeout(()=>{
        setConfirm(!confirm)
        setViewOptionAvailable(false);
      },100)
    }
  };

  useEffect(()=>{
    dispatch(editAmountPerDay(Math.round(parseInt(amount) / daysForDistribute)))
  }, [confirm])

  console.log(fromDaySelected);
  const option = () => {
    switch (viewOption) {
      case "distribute":
        return (
          <>
            <h3>Selecciona las fechas en las que te manejaras con este dinero</h3>
            <label>
              Desde
              <input
                type="date"
                placeholder="Selecciona una fecha"
                value={fromDaySelected}
                onChange={(e) => setFromDaySelected(e.target.value)}
              />
            </label>
            <label>
              Hasta 
              <input
                type="date"
                placeholder="Selecciona una fecha"
                value={untilDaySelected}
                onChange={(e) => setUntilDaySelected(e.target.value)}
              />
            </label>
              <button className="btn btn-info m-2" onClick={() => handleDistribute()}>
                Distribuir
              </button>
              <button className="btn btn-info m-2" onClick={()=> setViewOptionAvailable(false)}>
                Cerrar
              </button>
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
            <div className="container-btn-available">
              <button
                className="btn-available"
                onClick={() => setViewOption("distribute")}
                >
                Repartir en dias
              </button>
              <button
                className="btn-available"
                onClick={() => setViewOption("save")}
                >
                Ahorrar
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <div>
      {viewOptionAvailable && option()}

    </div>
  );
};;

export default Available;
