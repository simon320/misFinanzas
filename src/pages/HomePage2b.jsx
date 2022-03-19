// import React, { useContext, useEffect, useState } from "react";
// import { Outlet, Link, useNavigate } from "react-router-dom";
// import { FinanceContext } from "../context/financeContext";
// import { useCalendar } from "../hooks/useCalendar";
// import Available from "../components/Available";
// import Saved from "../components/Saved";
// import { useSelector, useDispatch } from "react-redux";

// import { deleteUser, resetAmount } from "../redux/actions/actions";

// const HomePage = () => {
//   //redux
//   const name = useSelector((state) => state.currentUser.name);
//   const amount = useSelector((state) => state.currentUser.amount);
//   const saving = useSelector((state) => state.currentUser.saving);

//   const dispatch = useDispatch();

//   const {
//     viewOptionAvailable,
//     setViewOptionAvailable,
//     viewOptionSaved,
//     setViewOptionSaved,
//     moneyInAccount,
//     setMoneyInAccount,
//     savedMoney,
//     setSavedMoney,
//     setAmountPerDay,
//     setMoneyInBadge,
//     daysForDistribute,
//     setDaysForDistribute,
//   } = useContext(FinanceContext);
//   const {
//     today,
//     calendarRows,
//     selectedDate,
//     todayFormatted,
//     daysShort,
//     monthNames,
//     daysInMonth,
//     firstDayInMonth,
//   } = useCalendar();
//   // const navigation = useNavigate();

//   const confirmDelete = (callback) => {
//     const deleteUser = window.confirm(
//       "¿Esta seguro que desea borrar todos los datos de su cuenta?"
//     );
//     deleteUser && callback();
//   };

//   const handleDelete = () => {
//     setMoneyInBadge(0);
//     setAmountPerDay(0);
//     setDaysForDistribute(daysInMonth);
//     setViewOptionSaved(false);
//     setViewOptionAvailable(false);
//     // navigation("/");
//     //redux
//     dispatch(deleteUser());
//   };

//   const handleClickAvailable = () => {
//     setViewOptionAvailable(!viewOptionAvailable);
//     setViewOptionSaved(false);
//   };
//   const handleClickSaved = () => {
//     setViewOptionSaved(!viewOptionSaved);
//     setViewOptionAvailable(false);
//   };

//   useEffect(() => {
//     setAmountPerDay(moneyInAccount / daysForDistribute);
//   }, []);
//   console.log(saving);
//   // const [dayStart, setDayStart] = useState("")
//   // console.log(dayStart)
//   return (
//     /////////////////////////////////////////////////////////////////      VIEJO
//     // <div>

//     //   <h1>Home Page</h1>

//     //   <nav>
//     //     <h1>misFinanzas</h1>
//     //     <p>{name}</p>
//     //     <label>
//     //       Cuenta
//     //       <button className="btn btn-info m-2" onClick={handleClickAvailable}>
//     //         ${amount}
//     //       </button>{" "}
//     //     </label>
//     //     {" || "}
//     //     <label>
//     //       Ahorrado
//     //       <button className="btn btn-info m-2" onClick={handleClickSaved}>
//     //         ${saving}
//     //       </button>{" "}
//     //     </label>
//     //     {viewOptionAvailable && (
//     //       <Available setViewOptionAvailable={setViewOptionAvailable} />
//     //     )}
//     //     {viewOptionSaved && <Saved setViewOptionSaved={setViewOptionSaved} />}{" "}
//     //     <br />
//     //     <Link to={"Calendar"}>Home</Link>{" "}
//     //     <Link to={"ForeignExchange"}>Divizas</Link> <br />
//     //     <button
//     //       className="btn btn-danger m-2"
//     //       onClick={() => confirmDelete(handleDelete)}
//     //     >
//     //       Borrar Usuario
//     //     </button>
//     //     {/* <input type="date" value={dayStart} onChange={(e)=> setDayStart(e.target.value)} /> */}
//     //   </nav>

//     //   <Outlet />
//     // </div>
//   );
// };

// export default HomePage;
