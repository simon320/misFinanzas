import React, { useEffect, useState, useContext } from "react";
import { FinanceContext } from "../context/financeContext";


const Row = ({ data, date, dispatch }) => {


  const handleDelete = (id) => {
    const actionDelete = {
      type: "delete",
      payload: id,
    };
    dispatch(actionDelete);
  };

  let dataArray = data.map((row)=> (row.id).includes(date) && <p key={row.amount}>{parseInt(row.amount)}</p>)
  let dayDataArray = dataArray.filter((dayData)=> dayData !== false)


console.log(dayDataArray)
  return (
    <table className="center">
      <tbody>
        {data.map((item) => {
          return (item.id).includes(date) && ( item.character == "Ingreso" ?
              (
                <tr key={item.id}>
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
              <tr key={item.id}>
                <td className="text-center">{item.character}</td>
                <td className="text-center">{item.description}</td>
                <td className="text-center">-${item.amount}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger badge px-3 my-1"
                    >
                    ✘
                  </button>(
                </td>
              </tr>
            )
          )
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Ingresos: 
            {dataArray}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Row;
