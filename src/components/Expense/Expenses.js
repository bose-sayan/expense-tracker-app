import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";
import { useState } from "react";

function Expenses(props) {
  const [activeYear, setActiveYear] = useState("");
  const selectYearHandler = (selectedYear) => {
    setActiveYear(selectedYear);
  };
  const filteredExpenses = props.data.filter((expense) =>
    activeYear ? expense.date.getFullYear() === Number(activeYear) : true
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={activeYear}
        onSelectYear={selectYearHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />

      <ExpenseList expenses={filteredExpenses} onDeleteExpense={props.onDeleteExpense} />
    </Card>
  );
}

export default Expenses;
