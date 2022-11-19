import React from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function Expense(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default Expense;
