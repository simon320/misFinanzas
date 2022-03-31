import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FinanceContext } from "../context/financeContext";

import { cleanLogout } from "../redux/actions/dateRegister";
import { logout } from "../redux/actions/auth";
import Calendar from "../components/Calendar";
import { editAcount, readAcount } from "../redux/actions/acount";
import { loadDataAcount } from "../helpers/loadDataAcount";
import Available from "../components/Available";
import Saved from "../components/Saved";

const HomePage = () => {
  const {
    viewOptionAvailable,
    setViewOptionAvailable,
    viewOptionSaved,
    setViewOptionSaved,
    setAmountPerDay,
    daysForDistribute,
    setDaysForDistribute,
  } = useContext(FinanceContext);

  const userName = useSelector((state) => state.authReducer.displayName);
  const userId = useSelector((state) => state.authReducer.uid);
  const acount = useSelector((state) => state.acountReducer.user);
  const amount = useSelector((state) => state.acountReducer.user.amount);
  const saving = useSelector((state) => state.acountReducer.user.saved);

  const [moneyAvailable, setMoneyAvailable] = useState(amount);
  const dispatch = useDispatch();

  console.log(amount);
  console.log(userId);
  console.log(acount);

  const navigation = useNavigate();

  // const confirmDelete = (callback) => {
  //   const deleteUser = window.confirm(
  //     "¿Esta seguro que desea borrar todos los datos de su cuenta?"
  //   );
  //   deleteUser && callback();
  // };

  const handleLogout = () => {
    dispatch(cleanLogout());
    dispatch(logout());
    navigation("/auth");
  };

  const handleL = async () => {
    dispatch(editAcount(115000));
    const dataAcount = await loadDataAcount(userId);
    dispatch(readAcount(dataAcount));
  };

  //////////////////////////////

  // const [viewOptionAvailable, setViewOptionAvailable] = useState(false);
  // const [viewOptionSaved, setViewOptionSaved] = useState(false);

  const handleClickAvailable = () => {
    setViewOptionAvailable(!viewOptionAvailable);
    setViewOptionSaved(false);
  };

  const handleClickSaved = () => {
    setViewOptionSaved(!viewOptionSaved);
    setViewOptionAvailable(false);
  };

  useEffect(() => {
    setMoneyAvailable(amount);
  }, [acount]);



  return (
    <div>
      <nav>
        <h1>misFinanzas</h1>
        <p>{userName}</p>
        <label>
          Cuenta
          <button className="btn btn-info m-2" onClick={handleClickAvailable}>
            ${moneyAvailable}
          </button>{" "}
        </label>
        <label>
          Ahorrado
          <button className="btn btn-info m-2" onClick={handleClickSaved}>
            ${saving}
          </button>{" "}
        </label>
        {viewOptionAvailable && <Available setMoneyAvailable={setMoneyAvailable} />}
        {viewOptionSaved && (
          <Saved setMoneyAvailable={setMoneyAvailable} />
        )}{" "}
        <br />
        <Link to={"Calendar"}>Home</Link>{" "}
        <Link to={"ForeignExchange"}>Divizas</Link> <br />
        <button className="btn btn-danger rigth" onClick={handleL}>
          EDITAR
        </button>
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
