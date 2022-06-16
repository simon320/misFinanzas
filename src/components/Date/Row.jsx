import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { FinanceContext } from "../../context/financeContext";
import { addRegister, deleteRegisterDB, editRegister, recordRegister } from "../../redux/actions/dateRegister";
import ButtonDistribuite from "./ButtonDistribuite";

const Row = ({ currentDate, date }) => {
  const dispatch = useDispatch()

  const handleCompleted = (date) => {
    for (const item of currentDate) {
      if(date == item.date){
        dispatch(deleteRegisterDB(item.id))
        dispatch(recordRegister(item.date, item.character, item.description, item.typeRegister, true));
      }
    }
  }

  const handleDelete = (id) => {
    dispatch(deleteRegisterDB(id))
  };

  // let dataArray = data.filter((row) => row.id.includes(date)); //Filtro los ObjetosMovimientos hechos solo en este dia.
  let dataArray = currentDate.filter((row) => row.date.includes(date)); //Filtro los ObjetosMovimientos hechos solo en este dia.

  // TOTAL INCOME
  let income = 0
  let dayIncomesTrue = dataArray.map((dayIncome) => dayIncome.character !== "Expense" && dayIncome.typeRegister)//Creo array con los montos de los ingresos y valor "false" en lugar de gastos.
  let dayIncomeArray = dayIncomesTrue.filter((amountIncome) => amountIncome !== false)//Array de monto de ingresos.
  for (let i = 0; i < dayIncomeArray.length; i++) {
    income += parseInt(dayIncomeArray[i]);
  }
  
  // TOTAL EXPENSE
  let expense = 0
  let dayExpensesTrue = dataArray.map((dayExpense) => dayExpense.character !== "Income" && dayExpense.typeRegister)//Creo array con los montos de los gastos y valor "false" en lugar de ingresos.
  let dayExpenseArray = dayExpensesTrue.filter((amountExpense) => amountExpense !== false)//Array de monto de gastos.
  for (let i = 0; i < dayExpenseArray.length; i++) {
    expense += parseInt(dayExpenseArray[i]);
  }

  const [totalDay, setTotalDay] = useState(income - expense);

  let today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();
  const todayFormated = `${currentDay}-${currentMonth}-${currentYear}`


  useEffect(()=>{
    setTotalDay(income - expense)
  }, [currentDate])
  console.log(currentDate);
 

  return (
    <>
    <table className="center">
      <tbody>
        {currentDate.map((item) => {
          return (
            item.date.includes(date) &&
            (item.character == "Income" ? (
              <tr className={`${item.completed ? "row-confirm" : "incomeRow"}`} key={item.id}>
                <td className="text-center">{item.description}</td>
                <td className="text-center">${item.typeRegister}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className={`${item.completed ? "hide" : "btn"}`}
                  >
                    ✘
                  </button>
                </td>
              </tr>
            ) : (
              <tr className={`${item.completed ? "row-confirm" : "incomeRow"}`} key={item.id}>
                <td className="text-center">{item.description}</td>
                <td className="text-center">-${item.typeRegister}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className={`${item.completed ? "hide" : "btn"}`}
                  >
                    ✘
                  </button>
                </td>
              </tr>
            ))
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>
            Ingresos: ${income}
          </td>
          <td colSpan={2}>
            Gastos: ${expense}
          </td>
        </tr>
        <tr>
          <td>
            <p>Total del dia: ${totalDay}</p>
          </td>
        </tr>
        </tfoot>
      </table>
          {
            totalDay !== 0 & date < todayFormated ?
              <ButtonDistribuite total={totalDay} handleCompleted={handleCompleted} date={date} /> : ""
          }
    </>
  );
};

export default Row;
