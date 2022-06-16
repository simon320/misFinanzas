import React, { useState, useEffect, useContext } from "react";
import { useCalendar } from "../hooks/useCalendar";
import { FinanceContext } from "../context/financeContext";
import "../App.css";
import { useSelector } from "react-redux";
import Date from "./Date/Date";


const Calendar = () => {

  const {
    selectedDate,
    todayFormatted,
    calendarRows,
    daysShort,
    monthNames,
    daysInMonth,
    firstDayInMonth,
    getNextMonth,
    getPrevMonth,
  } = useCalendar();


  const dayFormated = (date) => {
    const [d, m, y] = date.split("-");
    const day = d.length == 1 ? `0${d}` : d;
    const month = m.length == 1 ? `0${m}` : m;
    const dateFormated = `${y}-${month}-${day}`
    return dateFormated;
  }
  let hoy = "2022-06-14";

  const amountPerDay = useSelector((state) => state.acountReducer.user.amountPerDay);

  const { fromDaySelected, untilDaySelected } = useContext(FinanceContext);
  // const [ y, m, d ] = untilDaySelected ? untilDaySelected.split("-") : todayFormatted.split("-");
  // const [ today, currentMonth ] = todayFormatted.split("-");

  const [viewDate, setViewDate] = useState("");
  const handleClick = (e) => {
    if (viewDate == e.date) {
      setViewDate("")
    } else {setViewDate(e.date)}
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
                      {col.value}
                      <p style={{color: '#22bf22'}}>
                        {
                          dayFormated(col.date) <= untilDaySelected & dayFormated(col.date) >= fromDaySelected ? `$${col.amountPerDay}` : ""
                        }
                      </p>
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
                      {col.value}
                      <p style={{color: '#22bf22'}}>{
                        dayFormated(col.date) <= untilDaySelected & dayFormated(col.date) >= fromDaySelected ? `$${col.amountPerDay}` : ""
                      }</p>
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className="button" onClick={getPrevMonth}>
          Prev
        </button>
        <button className="button" onClick={getNextMonth}>
          Next
        </button>


{/* ------ RENDER DATE SELECTED -------------------------------------------------------------------------------------------- */}
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
                    amountPerDay={dayFormated(date.date) <= untilDaySelected & dayFormated(date.date) >= fromDaySelected ? `$${amountPerDay}` : ""}
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
