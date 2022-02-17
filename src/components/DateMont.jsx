import React from "react";

const DateMont = ({ col, today, avaibleForDays }) => {
  return (
      <span
        className={`${
          col.value.toString() < today.getDate() ? "cross-out" : "avaible"
        } text-ligth`}
      >
        ${avaibleForDays}
      </span>
  );
};

export default DateMont;