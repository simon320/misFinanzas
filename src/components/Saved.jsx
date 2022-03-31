import React, { useState, useContext, useEffect } from "react";
import { FinanceContext } from "../context/financeContext";
import { useSelector, useDispatch } from "react-redux";
import { loadDataAcount } from "../helpers/loadDataAcount";
import { editAcount, editSaving, readAcount } from "../redux/actions/acount";


const Saved = ({setMoneyAvailable}) => {
  const userId = useSelector((state) => state.authReducer.uid);
  const amount = useSelector((state) => state.acountReducer.user.amount);
  const saving = useSelector((state) => state.acountReducer.user.saved);
  const dispatch = useDispatch();

  const {
    viewOptionAvailable,
    setViewOptionAvailable,
    viewOptionSaved,
    setViewOptionSaved,
    moneyInAccount,
    setMoneyInAccount,
    savedMoney,
    setSavedMoney,
    moneyInBadge,
    setMoneyInBadge,
    setAmountPerDay,
    daysForDistribute,
    setDaysForDistribute,
  } = useContext(FinanceContext);

  const [viewOption, setViewOption] = useState("");
  const [moneyForAccount, setMoneyForAccount] = useState("");
  const [moneyForBadge, setMoneyForBadge] = useState("")

  const handleTransfer = async (moneyTransfer, confirmTransfer) => {
      saving >= moneyTransfer
        ? confirmTransfer()
        : window.alert("No tienes esa cantidad de dinero ahorrado")
      const dataAcount = await loadDataAcount(userId);
      dispatch(readAcount(dataAcount));
  }

  const handleTransferAccount = () => {
    dispatch(editAcount(parseInt(amount) + parseInt(moneyForAccount)));
    dispatch(editSaving(parseInt(saving) - parseInt(moneyForAccount)));
    setTimeout(() => {
      setViewOptionSaved(false);
    }, 250);
  };

  const handleTransferBadge = () => {
    // dispatch(editAmount(parseInt(savedMoney - parseInt(moneyForBadge))));
    // dispatch(editAmount(parseInt(moneyInBadge) + parseInt(moneyForBadge)));
    setTimeout(() => {
      setViewOptionSaved(false);
    }, 250);
  };

  useEffect(() => {
    console.log(amount)
    setMoneyAvailable(amount);
  }, [amount]);

console.log(parseInt(savedMoney))
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
                className="btn btn-info m-2"
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
