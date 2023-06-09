import "./App.css";
import { Alert } from "./components/Alert";
import { ExpenseForm } from "./components/ExpenseForm";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import { ExpenseLists } from "./components/ExpenseLists";

/*const initialExpenses = [
  { id: v4(), charge: "rent", amount: 1000 },
  { id: v4(), charge: "house", amount: 1020 },
  { id: v4(), charge: "car", amount: 2000 },
  { id: v4(), charge: "car", amount: 2000 },
]; */
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);
  const [alert, setAlert] = useState({ show: false });
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((items) => {
          return (items.id = id ? { ...items, charge, amount } : items);
        });
        setExpenses(tempExpenses);
        handleAlert({
          type: "success",
          text: `item edited successfully.`,
        });
        setEdit(false);
      } else {
        const singleExpense = { id: v4(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "Item added succesfully." });
      }

      setAmount("");
      setCharge("");
    } else {
      handleAlert({
        type: "danger",
        text: `Charge has to be added and amount bigger than 0.`,
      });
    }
  };
  const clearItems = () => {
    setExpenses([]);
  };
  const handleDelete = (id) => {
    const temExpenses = expenses.filter((items) => items.id !== id);
    setExpenses(temExpenses);
    handleAlert({ type: "danger", text: `Item deleted successfully` });
  };
  const handleEdit = (id) => {
    const expenseEdit = expenses.find((items) => (items.id = id));
    let { charge, amount } = expenseEdit;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };
  useEffect(() => {
    console.log("we called useEffect");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseLists
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
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
