import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ErrorModal from "./components/UI/ErrorModal";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [invalidInput, setInvalidInput] = useState();

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevState) => {
      return [expenseData, ...prevState];
    });
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevState) => {
      return prevState.filter((expense) => expense.id !== expenseId);
    });
  };

  const toggleInvalidInput = () => {
    setInvalidInput((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      {invalidInput && (
        <ErrorModal
          title="Invalid Input"
          message={["Input fields shouldn't be empty"]}
          onConfirm={toggleInvalidInput}
        />
      )}
      <NewExpense
        onAddExpense={addExpenseHandler}
        onInvalidInput={toggleInvalidInput}
      />
      ;
      <Expenses data={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
}

export default App;
