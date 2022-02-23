import { useContext } from 'react';
import { FinanceContext } from "./context/financeContext";


const dia = "2022-02-22";
const daysName = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];


let dates = [
    {
        id: "22-02-2022",
        date: `${daysName[new Date("2022-02-22").getDay()]} ${new Date("2022-02-22").getDate()+1}`,
        amountAvailable: 0,
        incomes: 0,
        expenses: 0
    },
    {
        id: "23-02-2022",
        date: "23-02-2022",
        amountAvailable: 0,
        incomes: 0,
        expenses: 0
    }
];

export default dates;
