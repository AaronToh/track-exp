import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddExpense.css';
import axios from 'axios';

function AddExpense({ user, onAddExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { id: userId } = user;

    try {
      const response = await axios.post('http://localhost:3001/addExpense', {
        userId,
        name,
        amount: parseFloat(amount),
        date,
      });
      if (response.data.success) {
        onAddExpense();
        setName('');
        setAmount('');
        setDate('');
        navigate('/');
      }
    } catch (error) {
      console.error('Error adding expense:', error);
    }
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