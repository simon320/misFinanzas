import React, { useContext, useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { FinanceContext } from "../context/financeContext";
import { useCalendar } from "../hooks/useCalendar";
import Available from "../components/Available";
import Saved from "../components/Saved";


const HomePage = () => {
  const {
    nameUser, setNameUser,
    moneyInAccount, setMoneyInAccount,
    viewOptionAvailable, setViewOptionAvailable,
    savedMoney, setSavedMoney,
    setAmountPerDay,
    setMoneyInBadge,
    daysForDistribute, setDaysForDistribute,
    viewOptionSaved, setViewOptionSaved,
  } = useContext(FinanceContext);
  const {
    today,
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    daysInMonth,
    firstDayInMonth,
  } = useCalendar();
  const navigation = useNavigate();




  const confirmDelete = (callback) => {
     const deleteUser = window.confirm('¿Esta seguro que desea borrar todos los datos de su cuenta?')
     deleteUser && callback()
  }

  const handleDelete = () => {
      setNameUser("");
      setMoneyInAccount(0);
      setSavedMoney(0);
      setMoneyInBadge(0);
      setAmountPerDay(0);
      setDaysForDistribute(daysInMonth);
      setViewOptionSaved(false);
      setViewOptionAvailable(false);
      navigation("/");
  };

  const handleClickAvailable = () =>{
    setViewOptionAvailable(!viewOptionAvailable)
    setViewOptionSaved(false)
  }
  const handleClickSaved = () =>{
    setViewOptionSaved(!viewOptionSaved)
    setViewOptionAvailable(false)
  }
  
  useEffect(()=>{
    setAmountPerDay(moneyInAccount / daysForDistribute)
  },[])

  // const [dayStart, setDayStart] = useState("")
  // console.log(dayStart)
  return (
    <div>
      <nav>
        <h1>misFinanzas</h1>
        <p>{nameUser}</p>
        <label>Cuenta
          <button className="btn btn-info m-2" onClick={handleClickAvailable}>${moneyInAccount}</button>{" "}
        </label>
        {" || "}
        <label>Ahorrado
          <button className="btn btn-info m-2" onClick={handleClickSaved}>${savedMoney}</button>{" "}
        </label>
        {viewOptionAvailable && (
          <Available setViewOptionAvailable={setViewOptionAvailable} />
        )}
        {viewOptionSaved && <Saved setViewOptionSaved={setViewOptionSaved} />}{" "}
        <br />
        <Link to={"Calendar"}>Home</Link>{" "}
        <Link to={"ForeignExchange"}>Divizas</Link>{" "}
        <br />
        <button className="btn btn-danger m-2" onClick={() => confirmDelete(handleDelete)}>
          Borrar Usuario
        </button>
        {/* <input type="date" value={dayStart} onChange={(e)=> setDayStart(e.target.value)} /> */}
      </nav>
      <Outlet />
    </div>
  );
};

export default HomePage;
