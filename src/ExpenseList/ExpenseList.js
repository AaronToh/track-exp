// ExpenseList.js
import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} className="expense-item">
            <span>{expense.name}</span>
            <span>${expense.amount.toFixed(2)}</span>
            <span>{expense.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;