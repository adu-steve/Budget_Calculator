import React from "react";
import { MdSend } from "react-icons/md";

export const ExpenseForm = ({ ...props }) => {
  const { charge, amount, handleAmount, handleSubmit, handleCharge } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Charge</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 1000"
            value={amount}
            onChange={handleAmount}
          ></input>
        </div>
      </div>
      <button type="submit" className="btn">
        Submit
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};
