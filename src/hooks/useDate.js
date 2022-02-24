import { useState } from 'react'

const dia = "2022-02-22";
const daysName = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

let dates = [
    {
        id: "22-02-2022",
        date: `${daysName[new Date("2022-02-22").getDay()]} ${new Date("2022-02-22").getDate()+1}`,
        amountAvailable: 0,
        incomesDay: [],
        expensesDay: []
    },
    {
        id: "23-02-2022",
        date: "23-02-2022",
        amountAvailable: 0,
        incomes: 0,
        expenses: 0
    }
];


const useDate = ( dates ) => {
    const [selectDay, setSelectDay] = useState(today)
    const [selectDayAmount, setSelectDayAmount] = useState(amountPerDay)
    const [incomesDay, setIncomesDay] = useState([])
    const [expensesDay, setExpensesDay] = useState([])

    for(let i=0; i<dates.length; i++){
        console.log("Soy un dia")
    }

  return [

  ]
}

export default useDate