// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseList from './ExpenseList/ExpenseList.js';
import AddExpense from './AddExpense/AddExpense.js';
import './App.css';

function App() {
  // State to hold the list of expenses
  const [expenses, setExpenses] = useState([
    // Sample expense data
    { id: 1, name: 'Groceries', amount: 50, date: '2024-12-18' },
    { id: 2, name: 'Utilities', amount: 75, date: '2024-12-17' },
    // Add more sample expenses as needed
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/" className="nav-link" activeClassName="active" exact>
          Expense List
        </NavLink>
        <NavLink to="/add-expense" className="nav-link" activeClassName="active">
          Add Expense
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<ExpenseList expenses={expenses} />}
        />
        <Route
          path="/add-expense"
          element={<AddExpense onAddExpense={addExpenseHandler} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
