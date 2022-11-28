import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevState) => {
      return [expenseData, ...prevState];
    });
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevState) => {
      return prevState.filter((expense) => expense.id !== expenseId);
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />;
      <Expenses data={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
}

export default App;
