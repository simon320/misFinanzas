import React, { useState } from "react";


const RowIncomeAdd = ({ dispatch }) => {
  const [data, setData] = useState({ character: "", description: "", amount: "" });

  const { description, amount } = data;

  const actionAdd = {
    type: "add",
    payload: {
      id: description,
      character: "Ingreso",
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

  const handleAdd = () => {
    dispatch(actionAdd);
    setData({ character: "", description: "", amount: "" });
  };

  return (
    <>
      <label>
        Ingreso:
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
      <button className="btn btn-success mx-2" onClick={handleAdd} >
        ✚
      </button>
    </>
  );
};

export default RowIncomeAdd;
