import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddExpense.css';

function AddExpense({ onAddExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !date) {
      alert('Please fill in all fields.');
      return;
    }
    const newExpense = {
      id: Date.now(),
      name,
      amount: parseFloat(amount),
      date,
    };
    onAddExpense(newExpense);
    setName('');
    setAmount('');
    setDate('');
    navigate('/');
  };


  return (
    <form onSubmit={handleSubmit} className="add-expense-form">
      <h2>Add New Expense</h2>
      <div className="form-group">
        <label htmlFor="name">Expense Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-button">Add Expense</button>
    </form>
  );
}

export default AddExpense;