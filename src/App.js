// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseList from './components/ExpenseList/ExpenseList.js';
import AddExpense from './components/AddExpense/AddExpense.js';
import Login from './components/Login/Login.js';
import './App.css';

function App() {

  const [user, setUser] = useState(null);

    // Load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
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
          <button onClick={handleLogout} className="logout-button">
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
          element={user ? <ExpenseList user={user} /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/add-expense"
          element={user ? <AddExpense user={user} onAddExpense={() => {}} /> : <Login onLogin={handleLogin} />}
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
