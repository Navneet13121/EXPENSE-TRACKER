import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions`)
      .then(res => setTransactions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>{t.text}: ₹{t.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;