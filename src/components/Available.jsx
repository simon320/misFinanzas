import React, { useState, useContext, useEffect, useRef } from "react";
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
    amountPerDay, 
    setAmountPerDay,
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
      console.log(saving)

    dispatch(editAmount(currentAmount));
    dispatch(editSaving(currentSave));

    setConfirm(!confirm)
    
    setViewOptionAvailable(false);
  };

  const handleSaved = (amountAcount, moneySave, save) => {
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
  const amountPerRef = useRef();

  function dayInMonth(m, y) {
    return new Date(y, m, 0).getDate();
  }

  const handleDistribute = () => {
    let date = new Date()
    const currentDay = date.getDate()
    const currentMonth = date.getMonth() + 1
    const [y, m, d] = untilDaySelected.split("-")
    const day = parseInt(d);
    const month = parseInt(m);
    const year = parseInt(y);
    const currentMonthDays = dayInMonth(month, year)

    if (currentMonth === month) {
      setDaysForDistribute(day - currentDay)
    } 
    
    else if ((currentMonth +1) === month){
      // const nextMonthDays = dayInMonth(month, year)
      setDaysForDistribute((currentMonthDays - currentDay) + day)
    }

  };

  useEffect(()=>{
    setAmountPerDay(Math.round(amount / daysForDistribute))
    console.log(daysForDistribute)
  }, [setDaysForDistribute])

  const option = () => {
    switch (viewOption) {
      case "distribute":
        return (
          <>
            <label>
              ¿En cuantos dias queres distribuir el dinero?
              <input
                type="date"
                placeholder="Selecciona una fecha"
                value={untilDaySelected}
                onChange={(e) => setUntilDaySelected(e.target.value)}
              />
              <button className="btn btn-info m-2" onClick={handleDistribute}>
                Distribuir
              </button>
              <button className="btn btn-info m-2" onClick={()=> setViewOptionAvailable(false)}>
                Cerrar
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
