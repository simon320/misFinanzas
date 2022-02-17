import React, { useEffect, useContext } from "react";
import useCalendar from "../hooks/useCalendar";
import { Link, Outlet } from "react-router-dom";
import { DataContext } from "../context/dataContext";
import DateMont from "../components/DateMont";

const Calendar = () => {
  //   const { distribution, startOfDistribution } = useContext(DataContext);

  const daysInWeek = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

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

  //   const { totalAvaible, avaibleForDays, setAvaibleForDays } =
  //     useContext(DataContext);

  //   useEffect(() => {
  //     setAvaibleForDays(
  //       (totalAvaible / (distribution == "month" ? daysInMonth : 15)).toFixed(2)
  //     );
  //   }, [totalAvaible, distribution]);

  const dateClickHandle = () => {
    console.log(selectedDate);
  };

  return (
    <div className="container-div">
      <h3 className="center">
        {" "}
        {`${
          monthNames[selectedDate.getMonth()]
        } - ${selectedDate.getFullYear()}`}
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
                      onClick={() => dateClickHandle(col.date)}
                    >
                      <Link
                        className="link"
                        to={`./${col.date}`}
                        key={col.date}
                      >
                        {col.value}

                        <p className="avaible">$1000</p>
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
                      onClick={() => dateClickHandle(col.date)}
                    >
                      <Link
                        className="link"
                        to={`./${daysInWeek[col.nameDay - 1]} ${col.value}`}
                        col={col}
                        key={col.date}
                      >
                        {col.value}
                        <p>
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
                          $1000
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
      <Outlet />
    </div>
  );
};

export default Calendar;
