const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;