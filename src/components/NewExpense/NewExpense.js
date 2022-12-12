import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [newExpenseFormActive, setNewExpenseFormActive] = useState(false);

  const changeDisplayMode = () => {
    setNewExpenseFormActive((prevState) => !prevState);
  };

  const defaultDisplay = (
    <button onClick={changeDisplayMode}>Add New Expense</button>
  );

  const addExpenseHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
    changeDisplayMode();
  };

  return (
    <div className="new-expense">
      {newExpenseFormActive && (
        <ExpenseForm
          onAddExpense={addExpenseHandler}
          toggleDisplay={changeDisplayMode}
          onInvalidInput={props.onInvalidInput}
        />
      )}
      {!newExpenseFormActive && defaultDisplay}
    </div>
  );
};

export default NewExpense;
