import "./App.css";
import { ExpenseItem } from "./components/ExpenseItem";
import { Alert } from "./components/Alert";
import { ExpenseForm } from "./components/ExpenseForm";

function App() {
  return (
    <>
      <Alert />
      <ExpenseItem />
    </>
  );
}

export default App;
