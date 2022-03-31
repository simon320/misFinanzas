import React, { useState, useEffect, useContext } from "react";
import { useCalendar } from "../hooks/useCalendar";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Link, Outlet } from "react-router-dom";
import { FinanceContext } from "../context/financeContext";
import Date from "./Date";
import "../App.css";
import editDay from "../assets/editDay1.png";

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

  const [viewDate, setViewDate] = useState("");

  const handleClick = (e) => {
    setViewDate(e.date);
  };

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
          {Object.values(calendarRows).map((cols) => {
            return (
              <tr className="border-b-ligth" key={cols[0].date}>
                {cols.map((col) =>
                  col.date === todayFormatted ? (
                    <td
                      key={col.date}
                      className={`${col.classes} center relative today table-dark text-bold`}
                      onClick={() => handleClick(col)}
                    >
                      <img src={editDay} alt="" className="img-editDay" />
                      {col.value}
                      <p className="avaible">${col.amountPerDay}</p>
                    </td>
                  ) : (
                    <td
                      key={col.date}
                      className={`center relative ${col.classes} ${
                        col.classes !== "in-prev-month" &&
                        col.classes !== "in-next-month" &&
                        "text-bold"
                      }`}
                      onClick={() => handleClick(col)}
                    >
                      {/* <img src={editDay} alt="" className="img-editDay" /> */}
                      {col.value}
                      <p className="avaible">${col.amountPerDay}</p>
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      {Object.values(calendarRows).map((week) => {
        return (
          <div key={week[0].date}>
            {week.map(
              (date) =>
                date.date == viewDate && (
                  <Date
                    key={date.value}
                    income={date.income}
                    nameDay={date.nameDay}
                    value={date.value}
                    date={date.date}
                    amountPerDay={date.amountPerDay}
                  />
                )
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
