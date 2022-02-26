import React, { useState } from "react";

let y = 1;

const RowExpenseAdd = ({date, dispatch }) => {
  y++

  const [data, setData] = useState({
    character: "",
    description: "",
    amount: "",
  });

  const { description, amount } = data;

  const actionAdd = {
    type: "add",
    payload: {
      id: `${date}+${y}`,
      character: "Gasto",
      description,
      amount,
    },
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    dispatch(actionAdd);
    setData({ character: "", description: "", amount: "" });
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
          name="amount"
          value={amount}
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
