import React, { useState, useEffect, useContext } from "react";
import { useCalendar } from "../hooks/useCalendar";
import { Link, Outlet } from "react-router-dom";
import { FinanceContext } from "../context/financeContext";
import DateMont from "../components/DateMont";
import Date from "./Date";
import "../App.css"

const Calendar = () => {

  let x = 1;
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

  const [classClick, setClassClick] = useState("notView")

  const dateClickHandle = (e) => {
    console.log(calendarRows)
  };

  console.log(calendarRows)


  return (
    <div className="container-div">
      <h3 className="center">{" "}
        {`${ monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}
      </h3>
      <table className="container-div">
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
                      key={x++}
                      className={`${col.classes} center today table-dark text-bold`}
                      onClick={() => dateClickHandle()}
                    >
                      <Link
                        className="link"
                        to={`./${col.date}`}
                        key={col.date}
                      >
                        {col.value}
                        <p className="avaible">
                          ${col.amountPerDay}
                        </p>
                      </Link>
                    </td>
                        
                  ) : (
                    <>
                    <td
                      key={x++}
                      className={`center ${col.classes} ${
                        col.classes !== "in-prev-month" &&
                        col.classes !== "in-next-month" &&
                        "text-bold"
                      }`}
                      onClick={() => dateClickHandle(col)}
                      >
                      {/* <Link
                        className="link"
                        to={"Date"}
                        col={col}
                        key={col.date}
                        >
                      </Link> */}
                        {col.value}
                        <p>
                          ${col.amountPerDay}
                        </p>
                    </td>
                    <div key={col.date} className={classClick}>
                    <Date nameDay={col.nameDay} date={col.value} amount={col.amountPerDay} />
                  </div>
                        </>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <Outlet /> */}
      {Object.values(calendarRows).map((cols) => {
        return (
          <div key={cols[0].value}>
            {cols.map((col) => (
              <div key={col.date} >
                <Date nameDay={col.nameDay} date={col.value} amount={col.amountPerDay} />
              </div>
            ))}
          </div>
        )
        })
      }
    </div>
  );
};

export default Calendar;
