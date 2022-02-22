import React, { useContext } from 'react'
import { FinanceContext } from "../context/financeContext";

const ForeignExchange = () => {

  const { moneyInBadge } = useContext(FinanceContext);
  console.log(moneyInBadge)

  return (
    <div>
        <h1>Divizas</h1>
        <p>${moneyInBadge}</p>
    </div>
  )
}

export default ForeignExchange