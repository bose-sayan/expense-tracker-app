import "./ExpenseList.css";
import Expense from "./Expense";

const ExpenseList = (props) => {
  let expenses = props.expenses;
  expenses = expenses.sort((expense_1, expense_2) => {
    return new Date(expense_2.date) - new Date(expense_1.date);
  });
  console.log(expenses);

  const noExpenses = (
    <p className="expenses-list__fallback">No expenses found for this year!</p>
  );

  const haveExpenses = (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <Expense key={expense.id} {...expense} />
      ))}
    </ul>
  );
  if (expenses.length === 0) return noExpenses;
  return haveExpenses;
};

export default ExpenseList;
