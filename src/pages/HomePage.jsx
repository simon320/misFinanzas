import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FinanceContext } from "../context/financeContext";

import { cleanLogout } from "../redux/actions/dateRegister";
import { logout } from "../redux/actions/auth";
import Calendar from "../components/Calendar";
import { editAmount, readAcount } from "../redux/actions/acount";
import { loadDataAcount } from "../helpers/loadDataAcount";
import Available from "../components/Available";
import Saved from "../components/Saved";
import { loadDataAcountSnap } from "../helpers/loadDataAcountSnap";

const HomePage = () => {
  const {
    viewOptionAvailable,
    setViewOptionAvailable,
    viewOptionSaved,
    setViewOptionSaved,
    daysForDistribute,
    setDaysForDistribute,
    amountPerDay,
    setAmountPerDay,
    untilDaySelected
  } = useContext(FinanceContext);

  const [y, m, d] = untilDaySelected.split("-")



  const userName = useSelector((state) => state.authReducer.displayName);
  const uid = useSelector((state) => state.authReducer.uid);
  const acount = useSelector((state) => state.acountReducer.user);
  const amount = useSelector((state) => state.acountReducer.user.amount);
  const amountPerDays = useSelector((state) => state.acountReducer.user.amountPerDay);
  const saving = useSelector((state) => state.acountReducer.user.saved);

  const [confirm, setConfirm] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleLogout = () => {
    dispatch(cleanLogout());
    dispatch(logout());
    navigation("/auth");
  };

  //////////////////////////////

  const handleClickAvailable = () => {
    setViewOptionAvailable(!viewOptionAvailable);
    setViewOptionSaved(false);
  };

  const handleClickSaved = () => {
    setViewOptionSaved(!viewOptionSaved);
    setViewOptionAvailable(false);
  };

  useEffect(async ()=>{

    const dataSnap =  loadDataAcountSnap(uid)

    let dataAcount, saveAcount = acount
    try {
      dataAcount = await loadDataAcount(uid);
    } catch { new Error ("no me cargue!")}

    dispatch(readAcount(dataAcount))
  }, [confirm])


  return (
    <div>
      <nav>
        <h1>misFinanzas</h1>
        <p>{userName}</p>
        <div className="container-btn-acount">
          <label>
            Cuenta
            <button className="btn btn-acount" onClick={handleClickAvailable}>
              ${amount}
            </button>{" "}
          </label>
          <label>
            Ahorrado
            <button className="btn" onClick={handleClickSaved}>
              ${saving}
            </button>{" "}
          </label>
        </div>
        <div className="container-btn-option">
          {viewOptionAvailable &&
           <Available  confirm={confirm} setConfirm={setConfirm} />}
          {viewOptionSaved && 
            <Saved confirm={confirm} setConfirm={setConfirm} />}{" "}
        </div>
            <div>
              <h3>
                x/Dia <span>${amountPerDays}</span>
              </h3>
              <p>Hasta {d}/{m}</p>
            </div>
        <br />
        <Link to={"Calendar"}>Home</Link>{" "}
        <Link to={"ForeignExchange"}>Divizas</Link> <br />
       
      </nav>
      <button className="btn rigth" onClick={handleLogout}>
        Cerrar Seccion
      </button>
      <br />
      <section>
        <Calendar />
      </section>
    </div>
  );
};

export default HomePage;
