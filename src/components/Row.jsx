import React from "react";

const Row = ({ data, dispatch }) => {
  
  const handleDelete = (id) => {
    const actionDelete = {
      type: "delete",
      payload: id,
    };
    dispatch(actionDelete);
  };

  return (
    <>
      {data.map((item) => {
        return (
          <div className="center" key={item.id}>
            <span className="text-center">
              {item.description}
            </span>
            <span className="text-center">
              ${item.amount}
            </span>
              <button
                onClick={() => handleDelete(item.id)}
                className="btn btn-danger badge px-3 my-1"
              >
                ✘
              </button>
          </div>
        );
      })}
    </>
  );
};

export default Row;
