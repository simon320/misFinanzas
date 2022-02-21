import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage'

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [nameUser, setNameUser] = useLocalStorage('nameUser', '')
  const [moneyInAccount, setMoneyInAccount] = useLocalStorage('moneyInAccount', 0)
  const [savedMoney, setSavedMoney] = useLocalStorage('savedMoney', 0)
  const [amountPerDay, setAmountPerDay] = useLocalStorage('amountPerDay', 0)
  const [daysForDistribute, setDaysForDistribute] = useLocalStorage('daysForDistribute', 0);
  const [viewOptionAvailable, setViewOptionAvailable] = useState(false);
  const [viewOptionSaved, setViewOptionSaved] = useState(false);


  return (
    <DataContext.Provider
      value={{
        nameUser,
        setNameUser,
        moneyInAccount,
        setMoneyInAccount,
        savedMoney, 
        setSavedMoney,
        amountPerDay,
        setAmountPerDay,
        daysForDistribute, 
        setDaysForDistribute,
        viewOptionAvailable,
        setViewOptionAvailable,
        viewOptionSaved, 
        setViewOptionSaved
      }}
    >
      {children}
    </DataContext.Provider>
  );
};