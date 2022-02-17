import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { DataContext } from "../context/dataContext";

const StartingAcount = () => {

  const { nameUser } = useContext(DataContext);

  return (
    <div>
        <h2 style={{ fontSize: '15px'}}>StartingAcount</h2>
        <h1>{nameUser}</h1>
        <p>
            Para continuar, introduzca el monto de dinero en su cuenta.(Luego podra agregar mas ingresos de dinero)
        </p>
        <label>
            <input type="number" placeholder='$0.00'/>
        </label>
        <Link to="/HomePage">
        <button>Continuar</button>
      </Link>
    </div>
  )
}

export default StartingAcount