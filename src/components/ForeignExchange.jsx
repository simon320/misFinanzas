import React, { useContext } from 'react'
import { DataContext } from "../context/dataContext";

const ForeignExchange = () => {

  const { moneyInBadge } = useContext(DataContext);
  console.log(moneyInBadge)

  return (
    <div>
        <h1>Divizas</h1>
        <p>{moneyInBadge}</p>
    </div>
  )
}

export default ForeignExchange