import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { recordRegister } from "../redux/actions/dateRegister";


const RowExpenseAdd = ({ date }) => {

  const [data, setData] = useState({
    character: "",
    description: "",
    expense: "",
  });

  const dispatch = useDispatch();

  const { description, expense } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    dispatch(recordRegister(date, "Expense", description, expense));
    setData({ character: "", description: "", expense: "" });
  };

  return (
    <>
      <label>
        Gasto:
        <input
          onChange={handleChange}
          name="description"
          value={description}
          type="text"
          placeholder="tipo de ingreso"
          autoComplete="off"
        />
      </label>
      <label>
        $
        <input
          onChange={handleChange}
          name="expense"
          value={expense}
          type="text"
          placeholder="monto"
          autoComplete="off"
        />
      </label>
      <button className="btn btn-success mx-2" onClick={handleAdd}>
        ✚
      </button>
    </>
  );
};

export default RowExpenseAdd;
