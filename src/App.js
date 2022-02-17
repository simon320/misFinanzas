import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./components/Calendar";
import ForeignExchange from "./components/ForeignExchange";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import StartingAcount from "./pages/StartingAcount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="StartingAcount" element={<StartingAcount />} />
        <Route path="HomePage" element={<HomePage />} >
          <Route index element={<Calendar />} />
          <Route path="ForeignExchange" element={<ForeignExchange />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// path="Calendar" 