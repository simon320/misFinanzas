import { createContext, useState } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage'

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [nameUser, setNameUser] = useLocalStorage('nameUser', '')

  const [moneyInAccount, setMoneyInAccount] = useLocalStorage('moneyInAccount', 0)
  const [savedMoney, setSavedMoney] = useLocalStorage('savedMoney', 0)
  const [moneyInBadge, setMoneyInBadge] = useLocalStorage('moneyInBadge', 0)

  const [amountPerDay, setAmountPerDay] = useLocalStorage('amountPerDay', 0)
  const [daysForDistribute, setDaysForDistribute] = useLocalStorage('daysForDistribute', 0);
  const [viewOptionAvailable, setViewOptionAvailable] = useState(false);
  const [viewOptionSaved, setViewOptionSaved] = useState(false);
  
  let dataCalendar = useLocalStorage('dataCalendar', {});


  return (
    <FinanceContext.Provider
      value={{
        nameUser, setNameUser,
        moneyInAccount, setMoneyInAccount,
        savedMoney, setSavedMoney,
        moneyInBadge, setMoneyInBadge,
        amountPerDay, setAmountPerDay,
        daysForDistribute, setDaysForDistribute,
        viewOptionAvailable, setViewOptionAvailable,
        viewOptionSaved, setViewOptionSaved,
        dataCalendar
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};