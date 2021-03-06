import { useContext, useState } from "react";
import { useSelector } from "react-redux";

const daysShortArr = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
const daysName = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
const monthNamesArr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Noviembre", "Diciembre"];


export function useCalendar(daysShort = daysShortArr, monthNames = monthNamesArr) {
  const today = new Date();
  const todayFormatted = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
  const daysInWeek = [1, 2, 3, 4, 5, 6, 0];
  const [selectedDate, setSelectedDate] = useState(today);
  const selectedMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
  const prevMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0);
  const daysInMonth = selectedMonthLastDate.getDate();
  const firstDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
  const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1;
  let prevMonthStartingPoint = prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1;
  let currentMonthCounter = 1;
  let nextMonthCounter = 1;
  let rows = 6;
  const cols = 7;
  const calendarRows = {}
  const amountPerDay = useSelector((state) => state.acountReducer.user.amountPerDay);



  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      if (!calendarRows[i]) {
        calendarRows[i] = [];
      }

      if (i === 1) {
        if (j < startingPoint) {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: "in-prev-month",
              date: `${prevMonthStartingPoint}-${selectedDate.getMonth() === 0 ? 12 : selectedDate.getMonth()}-${selectedDate.getMonth() === 0
                  ? selectedDate.getFullYear() - 1
                  : selectedDate.getFullYear()}`,
              value: prevMonthStartingPoint,
              amountPerDay: amountPerDay,
              nameDay: daysName[j - 1],
              income: 0,
              expense: 0
            },
          ];
          prevMonthStartingPoint++;
        } else {
          calendarRows[i] = [
            ...calendarRows[i],
            {
              classes: "",
              date: `${currentMonthCounter}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`,
              value: currentMonthCounter,
              amountPerDay: amountPerDay,
              nameDay: daysName[(j-1)],
              income: 0,
              expense: 0
            },
          ];
          currentMonthCounter++;
        }
      } else if (i > 1 && currentMonthCounter < daysInMonth + 1) {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: "",
            date: `${currentMonthCounter}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`,
            value: currentMonthCounter,
            amountPerDay: amountPerDay,
            nameDay: daysName[(j-1)],
            income: 0,
            expense: 0
          },
        ];
        currentMonthCounter++;
      } else {
        calendarRows[i] = [
          ...calendarRows[i],
          {
            classes: "in-next-month",
            date: `${nextMonthCounter}-${selectedDate.getMonth() + 2 === 13
                ? 1
                : selectedDate.getMonth() + 2}-${selectedDate.getMonth() + 2 === 13
                    ? selectedDate.getFullYear() + 1
                    : selectedDate.getFullYear()}`,
            value: nextMonthCounter,
            amountPerDay: amountPerDay,
            nameDay: daysName[(j-1)],
            income: 0,
            expense: 0
          },
        ];
        nextMonthCounter++;
      }
    }
  }

const getPrevMonth = () => {
  setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1));
}

const getNextMonth = () =>{
    setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() +1, 1));
}

  return {
    today,
    daysShort,
    monthNames,
    calendarRows,
    todayFormatted,
    selectedDate,
    daysInMonth,
    firstDayInMonth,
    getPrevMonth,
    getNextMonth
  };
}
