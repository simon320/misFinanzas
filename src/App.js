import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StartingAcount from "./pages/StartingAcount";
import HomePage from "./pages/HomePage";
import Calendar from "./components/Calendar";
import ForeignExchange from "./components/ForeignExchange";
import Date from "./components/Date";
import AppRouter from "./routers/AppRouter";

function App() {
  return (

    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<LoginPage />} />
    //       <Route path="StartingAcount" element={<StartingAcount />} />
    //       <Route path="HomePage" element={<HomePage />}>
    //         <Route path="Calendar" element={<Calendar />} >
    //             {/* <Route path="Date" element={<Date />} /> */}
    //         </Route>
    //         <Route path="ForeignExchange" element={<ForeignExchange />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>


    <AppRouter />

  );
}

export default App;