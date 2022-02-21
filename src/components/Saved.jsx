import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/dataContext";

const Saved = () => {
    const [moneyToAccount, setMoneyToAccount] = useState(0)


    const option = () => {
        switch (viewOption) {
          case "addToAccount":
            return (
              <>
                <label>
                  ¿Cuanto quieres transferir a la cuenta principal?
                  <input
                    type="number"
                    value={moneyToAccount}
                    onChange={(e) => setMoneyToAccount(e.target.value)}
                  />
                  <button onClick={handleDistribute}>Distribuir</button>
                </label>
              </>
            );
          case "badge":
            return (
              <>
                <label>
                  ¿Cuanto dinero quieres ahorrar?
                  <input
                    type="number"
                    value={moneyForSaved}
                    onChange={(e) => setMoneyForSaved(e.target.value)}
                  />
                  <button onClick={handleSaved}>Ahorrar</button>
                </label>
              </>
            );
          default:
            return (
              <>
                <button onClick={() => setViewOption("addToAccount")}>
                  Agregar a dsponible pr dias
                </button>
                <button onClick={() => setViewOption("badge")}>Ahorrar en Divizas</button>
              </>
            );
        }
      };
    
      return <div>{viewOptionAvailable && option()}</div>;
    };

  return (
    <div>Saved</div>
  )
}

export default Saved