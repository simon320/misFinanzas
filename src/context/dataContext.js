import { createContext } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage'

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [nameUser, setNameUser] = useLocalStorage('nameUser', '')
  const [moneyInAccount, setMoneyInAccount] = useLocalStorage('moneyInAccount', '')

  return (
    <DataContext.Provider
      value={{
        nameUser,
        setNameUser,
        moneyInAccount,
        setMoneyInAccount
      }}
    >
      {children}
    </DataContext.Provider>
  );
};