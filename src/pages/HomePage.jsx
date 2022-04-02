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
    setViewOptionSaved
  } = useContext(FinanceContext);

  const userName = useSelector((state) => state.authReducer.displayName);
  const uid = useSelector((state) => state.authReducer.uid);
  const acount = useSelector((state) => state.acountReducer.user);
  const amount = useSelector((state) => state.acountReducer.user.amount);
  const saving = useSelector((state) => state.acountReducer.user.saved);

  console.log(amount);
  console.log(uid);
  console.log(acount);

  const [moneyAvailable, setMoneyAvailable] = useState(amount);
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

  useEffect( async  ()=>{
    console.log("see")
    const dataAcount = await loadDataAcount(uid);
    dispatch(readAcount(dataAcount));
  }, [confirm]) 


  return (
    <div>
      <nav>
        <h1>misFinanzas</h1>
        <p>{userName}</p>
        <label>
          Cuenta
          <button className="btn btn-info m-2" onClick={handleClickAvailable}>
            ${amount}
          </button>{" "}
        </label>
        <label>
          Ahorrado
          <button className="btn btn-info m-2" onClick={handleClickSaved}>
            ${saving}
          </button>{" "}
        </label>
        {viewOptionAvailable && <Available  confirm={confirm} setConfirm={setConfirm} />}
        {viewOptionSaved && (
          <Saved confirm={confirm} setConfirm={setConfirm} />
        )}{" "}
        <br />
        <Link to={"Calendar"}>Home</Link>{" "}
        <Link to={"ForeignExchange"}>Divizas</Link> <br />
        {/* <input type="date" value={dayStart} onChange={(e)=> setDayStart(e.target.value)} /> */}
      </nav>
      <button className="btn btn-danger rigth" onClick={handleLogout}>
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
