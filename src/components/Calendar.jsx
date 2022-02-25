import React, { useState, useEffect, useContext } from "react";
import { useCalendar } from "../hooks/useCalendar";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Link, Outlet } from "react-router-dom";
import { FinanceContext } from "../context/financeContext";
import DateMont from "../components/DateMont";
import Date from "./Date";
import "../App.css";

const Calendar = () => {
  const {
    today,
    selectedDate,
    todayFormatted,
    calendarRows,
    daysShort,
    monthNames,
    daysInMonth,
    firstDayInMonth,
  } = useCalendar();

  let { dataCalendar } = useContext(FinanceContext);

  const [viewDate, setViewDate] = useState("");

  dataCalendar = calendarRows;

  const handleClick = (e) => {
    setViewDate(e.date);
    console.log(viewDate);
  };

  const handleClose = () => {
    !viewDate == "" && setViewDate("");
  };

  console.log(dataCalendar);

  return (
    <div className="container-div">
      <h3 className="center">
        {" "}
        {`${
          monthNames[selectedDate.getMonth()]
        } - ${selectedDate.getFullYear()}`}
      </h3>
      <table className="container-div relative">
        <thead>
          <tr className="border-b-bold">
            {daysShort.map((day) => (
              <th className="center" key={day}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(dataCalendar).map((cols) => {
            return (
              <tr className="border-b-ligth" key={cols[0].date}>
                {cols.map((col) =>
                  col.date === todayFormatted ? (
                    <td
                      key={col.date}
                      className={`${col.classes} center today table-dark text-bold`}
                      onClick={() => handleClick(col)}
                    >
                      {col.value}
                      <p className="avaible">${col.amountPerDay}</p>
                    </td>
                  ) : (
                    <td
                      key={col.date}
                      className={`center ${col.classes} ${
                        col.classes !== "in-prev-month" &&
                        col.classes !== "in-next-month" &&
                        "text-bold"
                      }`}
                      onClick={() => handleClick(col)}
                    >
                      {col.value}
                      <p>${col.amountPerDay}</p>
                      {/* {col.date == viewDate && (
                        <div className="absolute">
                          <Date
                            nameDay={col.nameDay}
                            date={col.value}
                            amount={col.amountPerDay}
                          />
                          <button
                            onClick={() => handleClose(col)}
                            className="btn btn-danger badge px-3 my-1"
                          >
                            ✘
                          </button>
                        </div>
                      )} */}
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      {Object.values(calendarRows).map((cols) => {
        return (
          <div key={cols[0].date}>
            {cols.map((date) => date.date == viewDate && <Date key={date.value} income={date.income} nameDay={date.nameDay} date={date.value} amount={date.amountPerDay}/>)}
          </div>
        )
      })}
    </div>
  );
};

export default Calendar;
