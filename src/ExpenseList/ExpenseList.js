// ExpenseList.js
import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {/* Map over the expenses array and render each expense */}
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name} - ${expense.amount} on {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;