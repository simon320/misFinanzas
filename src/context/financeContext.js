import { createContext, useState } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage'

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {

  const [savedMoney, setSavedMoney] = useLocalStorage('savedMoney', 0)
  const [moneyInBadge, setMoneyInBadge] = useLocalStorage('moneyInBadge', 0)

  const [amountPerDay, setAmountPerDay] = useLocalStorage('amountPerDay', "")
  const [fromDaySelected, setFromDaySelected] = useLocalStorage('fromDaySelected', "")
  const [untilDaySelected, setUntilDaySelected] = useLocalStorage('untilDaySelected', "")
  const [daysForDistribute, setDaysForDistribute] = useLocalStorage('daysForDistribute', 0);
  const [confirm, setConfirm] = useState(false);
  const [viewOptionAvailable, setViewOptionAvailable] = useState(false);
  const [viewOptionSaved, setViewOptionSaved] = useState(false);
  const [lineThrough, setLineThrough] = useState(false);
  
  let dataCalendar = useLocalStorage('dataCalendar', {});


  return (
    <FinanceContext.Provider
      value={{
        moneyInBadge, setMoneyInBadge,
        amountPerDay, setAmountPerDay,
        fromDaySelected, setFromDaySelected,
        untilDaySelected, setUntilDaySelected,
        daysForDistribute, setDaysForDistribute,
        confirm, setConfirm,
        viewOptionAvailable, setViewOptionAvailable,
        viewOptionSaved, setViewOptionSaved,
        lineThrough, setLineThrough,
        dataCalendar
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};