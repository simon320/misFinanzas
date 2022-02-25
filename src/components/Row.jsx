import React, { useEffect, useState, useContext } from "react";
import { FinanceContext } from "../context/financeContext";

let x=1;

const Row = ({ data, dispatch }) => {
  const handleDelete = (id) => {
    const actionDelete = {
      type: "delete",
      payload: id,
    };
    dispatch(actionDelete);
  };


  return (
    <table className="center">
      <tbody>
        {data.map((item) => {
          return item.character == "Ingreso" ? (
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
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Row;
