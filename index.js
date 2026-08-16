const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Izy Mae! My Express server is running 🚀');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});