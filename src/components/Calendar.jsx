import React, { useEffect, useContext } from "react";
import { useCalendar } from "../hooks/useCalendar";
import { Link, Outlet } from "react-router-dom";
import { DataContext } from "../context/dataContext";
import DateMont from "../components/DateMont";
import Date from "./Date";

const Calendar = () => {

  let x = 1;
  let y;
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

  // const dateClickHandle = () => {
  //   console.log(selectedDate);
  // };

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
                    <td
                      key={x++}
                      className={`center ${col.classes} ${
                        col.classes !== "in-prev-month" &&
                        col.classes !== "in-next-month" &&
                        "text-bold"
                      }`}
                    >
                      <Link
                        className="link"
                        to={`${col.value}`}
                        col={col}
                        key={col.date}
                      >
                        {col.value}
                        <p>
                          ${col.amountPerDay}
                        </p>
                      </Link>
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Date calendarRows={calendarRows} />
    </div>
  );
};

export default Calendar;

{/* {distribution == "month" ? (
                          col.classes !== "in-prev-month" &&
                          col.classes !== "in-next-month" &&
                          <DateMont
                            col={col}
                            today={today}
                            avaibleForDays={avaibleForDays}
                          />
                        ) : (
                          x >=
                            (y =
                              parseInt(startOfDistribution) +
                              firstDayInMonth -
                              1) &&
                          x <
                            (y =
                              parseInt(startOfDistribution) +
                              firstDayInMonth +
                              14) && (
                            <DateMont
                              col={col}
                              today={today}
                              avaibleForDays={avaibleForDays}
                            />
                          )
                        )} */}
