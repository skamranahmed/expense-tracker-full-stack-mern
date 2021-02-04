import React from "react";

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list" id="list">
        <li className="minus">
          Case <span>-Rs.400.00</span>
          <button className="delete-btn"></button>
        </li>
      </ul>
    </>
  );
};

export default TransactionList;
