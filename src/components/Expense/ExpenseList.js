import "./ExpenseList.css";
import Expense from "./Expense";

const ExpenseList = (props) => {
  let expenses = props.expenses;
  expenses = expenses.sort((expense_1, expense_2) => {
    return new Date(expense_2.date) - new Date(expense_1.date);
  });

  const noExpenses = (
    <p className="expenses-list__fallback">No expenses found. Add some! </p>
  );

  const haveExpenses = (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <Expense key={expense.id} {...expense} onDeleteExpense={props.onDeleteExpense} />
      ))}
    </ul>
  );
  if (expenses.length === 0) return noExpenses;
  return haveExpenses;
};

export default ExpenseList;
