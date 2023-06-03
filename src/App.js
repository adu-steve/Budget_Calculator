import "./App.css";
import { Alert } from "./components/Alert";
import { ExpenseForm } from "./components/ExpenseForm";
import { v4 } from "uuid";
import { useState } from "react";
import { ExpenseLists } from "./components/ExpenseLists";

const initialExpenses = [
  { id: v4(), charge: "rent", amount: 1000 },
  { id: v4(), charge: "house", amount: 1020 },
  { id: v4(), charge: "car", amount: 2000 },
  { id: v4(), charge: "car", amount: 2000 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: v4(), charge, amount };
      setExpenses([...expenses, singleExpense]);
      setAmount("");
      setCharge("");
    } else {
    }
  };

  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseLists expenses={expenses} />
      </main>
      <h1>
        total spending:
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
