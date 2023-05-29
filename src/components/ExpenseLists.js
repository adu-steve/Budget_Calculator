import React from "react";
import { ExpenseItem } from "./ExpenseItem";

export const ExpenseLists = ({ expenses }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return <ExpenseItem key={expense.id} expense={expense} />;
        })}
      </ul>
      {expenses.length > 0 && <button className="btn">Clear Expenses</button>}
    </>
  );
};
