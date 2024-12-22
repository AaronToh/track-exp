// ExpenseList.js
import React, { useState, useEffect } from 'react';
import './ExpenseList.css';
import axios from 'axios';

function ExpenseList({ user }) {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getExpenses/${user.id}`);
        setExpenses(response.data.expenses);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };

    fetchExpenses();
  }, [user.id]);

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