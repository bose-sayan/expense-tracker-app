import React from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function Expense(props) {
  const handleDelete = () => {
    console.log(props.id);
    props.onDeleteExpense(props.id);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <div className="expense-item__delete">
         <i className="fa-regular fa-circle-xmark fa-xl" onClick={handleDelete}></i>
        </div>
      </Card>
    </li>
  );
}

export default Expense;
