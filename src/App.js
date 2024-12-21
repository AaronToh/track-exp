// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseList from './components/ExpenseList/ExpenseList.js';
import AddExpense from './components/AddExpense/AddExpense.js';
import Login from './components/Login/Login.js';
import './App.css';

function App() {
  // State to hold the list of expenses
  const [expenses, setExpenses] = useState([
    // Sample expense data
    { id: 1, name: 'Groceries', amount: 50, date: '2024-12-18' },
    { id: 2, name: 'Utilities', amount: 75, date: '2024-12-17' },
    // Add more sample expenses as needed
  ]);

  const [user, setUser] = useState(null);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/" className="nav-link">
          Expense List
        </NavLink>
        <NavLink to="/add-expense" className="nav-link">
          Add Expense
        </NavLink>
        {user ? (
          <button onClick={handleLogout} className="nav-link">
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        )}
      </nav>
      <Routes>
        <Route
          path="/"
          element={user ? <ExpenseList userId={user} /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/add-expense"
          element={user ? <AddExpense userId={user} onAddExpense={() => {}} /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
