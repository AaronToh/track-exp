// App.js
import React, { useState } from 'react';
import ExpenseList from './ExpenseList/ExpenseList.js';

function App() {
  // State to hold the list of expenses
  const [expenses, setExpenses] = useState([
    // Sample expense data
    { id: 1, name: 'Groceries', amount: 50, date: '2024-12-18' },
    { id: 2, name: 'Utilities', amount: 75, date: '2024-12-17' },
    // Add more sample expenses as needed
  ]);

  return (
    <div>
      <h1>Expense Tracker</h1>
      {/* Render the ExpenseList component and pass expenses as a prop */}
      <ExpenseList expenses={expenses} />
      {/* Additional components like AddExpense can be added here */}
    </div>
  );
}

export default App;
