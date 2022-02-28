import React, { useEffect, useState, useContext } from "react";
import { FinanceContext } from "../context/financeContext";

const Row = ({ data, date, dispatch, setAmountDay, amountDay }) => {
  const handleDelete = (id) => {
    const actionDelete = {
      type: "delete",
      payload: id,
    };
    dispatch(actionDelete);
  };

  
  let dataArray = data.filter((row) => row.id.includes(date)); //Filtro los ObjetosMovimientos hechos solo en este dia.
  
  // TOTAL INCOME
  let income = 0
  let dayIncomesTrue = dataArray.map((dayIncome) => dayIncome.character !== "Gasto" && dayIncome.amount)//Creo array con los montos de los ingresos y valor "false" en lugar de gastos.
  let dayIncomeArray = dayIncomesTrue.filter((amountIncome) => amountIncome !== false)//Array de monto de ingresos.
  for (let i = 0; i < dayIncomeArray.length; i++) {
    income += parseInt(dayIncomeArray[i]);
  }
  
  
  // TOTAL EXPENSE
  let expense = 0
  let dayExpensesTrue = dataArray.map((dayExpense) => dayExpense.character !== "Ingreso" && dayExpense.amount)//Creo array con los montos de los gastos y valor "false" en lugar de ingresos.
  let dayExpenseArray = dayExpensesTrue.filter((amountExpense) => amountExpense !== false)//Array de monto de gastos.
  for (let i = 0; i < dayExpenseArray.length; i++) {
    expense += parseInt(dayExpenseArray[i]);
  }
  useEffect(()=>{
    setAmountDay((amountDay + income) - expense);
  }, [income])
  
  console.log(`ingreso: ${income}`);
  console.log(`gasto: ${expense}`);
  return (
    <table className="center">
      <tbody>
        {data.map((item) => {
          return (
            item.id.includes(date) &&
            (item.character == "Ingreso" ? (
              <tr className="incomeRow" key={item.id}>
                <td className="text-center">{item.character}</td>
                <td className="text-center">{item.description}</td>
                <td className="text-center">${item.amount}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger badge px-3 my-1"
                  >
                    ✘
                  </button>
                </td>
              </tr>
            ) : (
              <tr className="expenseRow" key={item.id}>
                <td className="text-center">{item.character}</td>
                <td className="text-center">{item.description}</td>
                <td className="text-center">-${item.amount}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger badge px-3 my-1"
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
            Ingresos: {income}
          </td>
          <td colSpan={2}>
            Gastos: {expense}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Row;
