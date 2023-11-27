// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'lolysteMem.com3',
  database: 'mechanics_db',
  port: 3306,
  connectionLimit: 10,
});

// Funkcja sprawdzająca stan połączenia
function checkConnection() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT 1', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Ustanowienie połączenia
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Obsługa błędów połączenia
connection.on('error', (err) => {
  console.error('MySQL connection error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    // Ponowne połączenie w przypadku utraty połączenia
    console.log('Attempting to reconnect to MySQL...');
    connection.connect();
  } else {
    throw err;
  }
});

// Zamykanie połączenia przy zamykaniu aplikacji
process.on('SIGINT', () => {
  connection.end((err) => {
    if (err) {
      console.error('Error closing MySQL connection:', err);
    } else {
      console.log('MySQL connection closed');
    }
    process.exit();
  });
});

// Export funkcji sprawdzającej stan połączenia
module.exports = {
  connection,
  checkConnection,
};
