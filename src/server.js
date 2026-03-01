// server.js
const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// Dodaj middleware do obsługi JSON
app.use(express.json());

// Dodaj ścieżki API
app.use('/api', apiRoutes);

// Uruchom serwer na porcie 3001 (lub innym)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
