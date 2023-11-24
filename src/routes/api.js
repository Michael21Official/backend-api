// routes/api.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/getData', (req, res) => {
  // Pobierz dane z bazy danych i przekształć na JSON
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
