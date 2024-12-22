const express = require('express');
const app = express();
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.json({limit:'10mb'}))

let db = new sqlite3.Database('track-exp.db' , (err)=> {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
  });

app.post('/validatePassword', (req, res, next) => {
  const { username, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ?', [username], async (err, row) => {
      if (err) {
          return console.error(err.message);
      }
      if (!row) {
          res.status(401).send({ error: 'Invalid username' });
      } else if (row.password === password) {
          res.json({ success: true , userId: row.id , username: row.username });
      } else {
          res.status(401).send({ error: 'Invalid password' });
      }
  })
})

app.post('/addExpense', (req, res) => {
    const { userId, name, amount, date } = req.body;
    const sql = 'INSERT INTO expenses (user_id, name, amount, date) VALUES (?, ?, ?, ?)';
    db.run(sql, [userId, name, amount, date], function (err) {
        if (err) {
        return res.status(500).json({ error: err.message });
        }
        res.json({ success: true, expenseId: this.lastID });
    });
});

app.get('/getExpenses/:userId', (req, res) => {
    const { userId } = req.params;
    const sql = 'SELECT * FROM expenses WHERE user_id = ? ORDER BY date DESC';
    db.all(sql, [userId], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ expenses: rows });
    });
  });

app.listen(3001, () => console.log('listening on port 3001'))
