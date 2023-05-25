import "./App.css";
import { ExpenseItem } from "./components/ExpenseItem";
import { Alert } from "./components/Alert";
import { ExpenseForm } from "./components/ExpenseForm";
import { v4 } from "uuid";
import { useState } from "react";
import { ExpenseLists } from "./components/ExpenseLists";

const initialExpenses = [
  { id: v4(), charge: "rent", amount: 1000 },
  { id: v4(), charge: "house", amount: 1020 },
  { id: v4(), charge: "car", amount: 2000 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  return (
    <>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseLists expenses={expenses} />
      </main>
      <h1>
        total spending:{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
