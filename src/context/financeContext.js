import { createContext, useState } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage'

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {

  const [savedMoney, setSavedMoney] = useLocalStorage('savedMoney', 0)
  const [moneyInBadge, setMoneyInBadge] = useLocalStorage('moneyInBadge', 0)

  const [amountPerDay, setAmountPerDay] = useLocalStorage('amountPerDay', "")
  const [untilDaySelected, setUntilDaySelected] = useLocalStorage('untilDaySelected', "")
  const [daysForDistribute, setDaysForDistribute] = useLocalStorage('daysForDistribute', 0);
  const [viewOptionAvailable, setViewOptionAvailable] = useState(false);
  const [viewOptionSaved, setViewOptionSaved] = useState(false);
  
  let dataCalendar = useLocalStorage('dataCalendar', {});


  return (
    <FinanceContext.Provider
      value={{
        moneyInBadge, setMoneyInBadge,
        amountPerDay, setAmountPerDay,
        untilDaySelected, setUntilDaySelected,
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