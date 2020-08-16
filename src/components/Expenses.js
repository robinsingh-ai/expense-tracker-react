import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const Expenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amt = transactions.map((transactions) => transactions.Amount);

  const deposit = amt
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(1);
  const withdraw = amt
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc -= item), 0)
    .toFixed(1);

  return (
    <div className="container m-auto my-2 row">
      <div className="col-md-6 text-center minusIncome py-4">
        <h4>Deposit</h4>
        <p id="moneyPlus" className="money plus">
          +RS {deposit}
        </p>
      </div>
      <div className="col-md-6 text-center minusIncome py-4">
        <h4>Withdrawm</h4>
        <p id="moneyMinus" className="money minus">
          -RS {withdraw}
        </p>
      </div>
    </div>
  );
};
