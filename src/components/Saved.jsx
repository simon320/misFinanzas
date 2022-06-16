import React, { useState, useContext, useEffect } from "react";
import { FinanceContext } from "../context/financeContext";
import { useSelector, useDispatch } from "react-redux";
import { editAmount, editSaving, editBadge, readAcount, editAmountPerDay } from "../redux/actions/acount";



const Saved = () => {
  const amount = useSelector((state) => state.acountReducer.user.amount);
  const saving = useSelector((state) => state.acountReducer.user.saved);
  const badge = useSelector((state) => state.acountReducer.user.valuta);
  const {dolar} = badge;
  const dispatch = useDispatch();

  const {
    viewOptionSaved,
    setViewOptionSaved,
    confirm, setConfirm,
    daysForDistribute
  } = useContext(FinanceContext);

  const [viewOption, setViewOption] = useState("");
  const [moneyForAccount, setMoneyForAccount] = useState("");
  const [moneyForBadge, setMoneyForBadge] = useState("")

  const handleTransfer = async (moneyTransfer, confirmTransfer) => {
      saving >= moneyTransfer
        ? confirmTransfer()
        : window.alert("No tienes esa cantidad de dinero ahorrado")
  }

    //////////// Transferir dinero de ahorros a cuenta principal /////////////
  const handleTransferAccount = () => {
    const currentAmount = parseInt(amount) + parseInt(moneyForAccount);
    const currentSave = parseInt(saving) - parseInt(moneyForAccount);

    dispatch(editAmount(currentAmount));
    dispatch(editSaving(currentSave));
    dispatch(editAmountPerDay(Math.round(currentAmount / daysForDistribute)));


    setTimeout(()=>{
      setConfirm(!confirm)
      setViewOptionSaved(false);
    },100)
  };

  const handleTransferBadge = () => {
    const currentSave = parseInt(saving) - parseInt(moneyForBadge)
    const currentBadge = parseInt(dolar) + parseInt(moneyForBadge)

    dispatch(editSaving(currentSave));
    dispatch(editBadge(currentBadge));

    setConfirm(!confirm)

    setViewOptionSaved(false);
  };

  const option = () => {
    switch (viewOption) {
      case "addToAccount":
        return (
          <>
            <label>
              ¿Cuanto quieres transferir a la cuenta principal?
              <input
                type="number"
                placeholder="$00.0"
                value={moneyForAccount}
                onChange={(e) => setMoneyForAccount(e.target.value)}
              />
              <button
                className="btn btn-info m-2"
                onClick={() =>
                  handleTransfer(moneyForAccount, handleTransferAccount)
                }
              >
                Distribuir
              </button>
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
                placeholder="$00.0"
                value={moneyForBadge}
                onChange={(e) => setMoneyForBadge(e.target.value)}
              />
              <button
                className="btn-saved"
                onClick={() =>
                  handleTransfer(moneyForBadge, handleTransferBadge)
                }
              >
                Ahorrar
              </button>
            </label>
          </>
        );
      default:
        return (
          <>
            <button
              className="btn btn-info m-2"
              onClick={() => setViewOption("addToAccount")}
            >
              Agregar a disponible por dias
            </button>
            <button
              className="btn btn-info m-2"
              onClick={() => setViewOption("badge")}
            >
              Ahorrar en Divizas
            </button>
          </>
        );
    }
  };

  return <div>{viewOptionSaved && option()}</div>;
};

export default Saved;
