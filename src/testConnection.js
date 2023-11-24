// testConnection.js
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
function testConnection() {
  connection.query('SELECT 1', (error, results) => {
    if (error) {
      console.error('Error checking connection to MySQL:', error);
    } else {
      console.log('Connection to MySQL is active:', results);
    }

    // Zakończ połączenie po zakończeniu testu
    connection.end();
  });
}

// Uruchom test połączenia
testConnection();
