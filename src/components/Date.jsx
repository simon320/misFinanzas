import React from "react";

const Date = ({ calendarRows }) => {
  console.log(calendarRows[1][2].nameDay)

  return (
    <>
      <div className="center flex">
        <p>
          {" "}
          {calendarRows[1][2].nameDay}
        </p>
      </div>
      <div className="flex">
      </div>
    </>
  );
};

export default Date;
