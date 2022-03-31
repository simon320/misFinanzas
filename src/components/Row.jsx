import React from "react";
import { useDispatch } from "react-redux";
import { deleteRegisterDB } from "../redux/actions/dateRegister";

const Row = ({ currentDate, date }) => {

  const dispatch = useDispatch()

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

  // useEffect(()=>{
  //   setAmountDay((amountDay + income) - expense);
  // }, [income])

  return (
    <table className="center">
      <tbody>
        {currentDate.map((item) => {
          return (
            item.date.includes(date) &&
            (item.character == "Income" ? (
              <tr className="incomeRow" key={item.id}>
                <td className="text-center">{item.character}</td>
                <td className="text-center">{item.description}</td>
                <td className="text-center">${item.typeRegister}</td>
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
                <td className="text-center">-${item.typeRegister}</td>
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
            Ingresos: ${income}
          </td>
          <td colSpan={2}>
            Gastos: ${expense}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Row;
