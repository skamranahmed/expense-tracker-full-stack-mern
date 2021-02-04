import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list" id="list">
        {transactions.map((transaction) => (
          <li className="minus" key={transaction.id}>
            {transaction.text} <span>{transaction.amount}</span>
            <button className="delete-btn"></button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
