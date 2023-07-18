const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Contact Us form
app.get('/contactus', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contactus.html'));
});

// Form submission success
app.post('/success', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'success.html'));
});

// 404 Page Not Found
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
