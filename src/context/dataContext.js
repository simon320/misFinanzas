import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [nameUser, setNameUser] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalAvaible, setTotalAvaible] = useState(0);
  const [avaibleForDays, setAvaibleForDays] = useState(0);
  const [distribution, setDistribution] = useState("month"); 
  const [startOfDistribution, setStartOfDistribution] = useState("1"); 

  return (
    <DataContext.Provider
      value={{
        totalIncome,
        setTotalIncome,
        totalExpenses,
        setTotalExpenses,
        totalAvaible,
        setTotalAvaible,
        avaibleForDays, 
        setAvaibleForDays,
        distribution,
        setDistribution,
        startOfDistribution,
        setStartOfDistribution
      }}
    >
      {children}
    </DataContext.Provider>
  );
};