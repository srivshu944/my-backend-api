const express = require('express');
const app = express();
const port = 3000;

// Define a simple API endpoint
app.get('/hello', (req, res) => {
  res.send('Hello, Backstage!');
});

// Start the server
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

