import React from "react";
import AppRouter from "./routers/AppRouter";
import { FinanceProvider } from "./context/financeContext";


function App() {
  return (
    <FinanceProvider>
      <AppRouter />
    </FinanceProvider>
  );
}

export default App;