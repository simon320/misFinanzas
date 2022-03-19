import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRegister, recordIncome } from "../redux/actions/dateRegister";


const RowIncomeAdd = ({ date }) => {

  const [data, setData] = useState({
    character: "",
    description: "",
    income: 0,
  });

  const dispatch = useDispatch();

  const { description, income } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    dispatch(recordIncome(date, description, income));
    setData({ character: "", description: "", income: 0 });
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
          name="income"
          value={income}
          type="number"
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

export default RowIncomeAdd;
