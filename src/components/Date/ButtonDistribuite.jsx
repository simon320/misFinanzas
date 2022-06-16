import React, { useContext } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FinanceContext } from '../../context/financeContext';
import { editSaving } from '../../redux/actions/acount';

const ButtonDistribuite =  ({ total, handleCompleted, date }) => {
    const {confirm, setConfirm, lineThrough, setLineThrough, daysForDistribute } = useContext(FinanceContext);
    const [viewOption, setViewOption] = useState(false);

    const amount = useSelector((state) => state.acountReducer.user.amount);
    const saving = useSelector((state) => state.acountReducer.user.saved);
    const dispatch = useDispatch();

//////////// Transferir dinero a los ahorros /////////////
    const saved = (moneyForSaved) => {
    const currentSave = saving
      ? saving + parseInt(moneyForSaved)
      : parseInt(moneyForSaved);

    dispatch(editSaving(currentSave));
    handleCompleted(date);
    setConfirm(!confirm)
    setViewOption(false);
  };

  const handleSaved = (amountAcount, moneySave, save) => {
    parseInt(amountAcount) >= parseInt(moneySave)
      ? save(parseInt(moneySave))
      : window.alert("No tienes esa cantidad de dinero en la cuenta");
  };


  return (
    <>
        <button onClick={()=> setViewOption(!viewOption)}> Manejar diferencia {total}</button>
        {
            viewOption ? (
                total > 0 ?
                    <div>
                    <p> ¿Donde quieres depositar lo que sobra? </p>
                    <div>
                        <button> Cuenta</button>
                        <button onClick={()=> saved(total)}> Ahorros</button>
                    </div>
                </div>
                :
                <div>
                    <p> ¿De donde quieres sacar el dinero gastado extra? </p>
                    <div>
                        <button> Cuenta</button>
                        <button> Ahorros</button>
                    </div>
                </div>
            ) : ""
        }
    </>
  )
}

export default ButtonDistribuite