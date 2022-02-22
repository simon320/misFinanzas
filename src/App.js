import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FinanceProvider } from "./context/financeContext";
import LoginPage from "./pages/LoginPage";
import StartingAcount from "./pages/StartingAcount";
import HomePage from "./pages/HomePage";
import Calendar from "./components/Calendar";
import ForeignExchange from "./components/ForeignExchange";

function App() {
  return (
    <FinanceProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="StartingAcount" element={<StartingAcount />} />
          <Route path="HomePage" element={<HomePage />}>
            <Route index element={<Calendar />} />
            <Route path="ForeignExchange" element={<ForeignExchange />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FinanceProvider>
  );
}

export default App;