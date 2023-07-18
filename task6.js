const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Set views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Import controllers
const contactController = require('./controllers/contactController');
const successController = require('./controllers/successController');

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Contact Us form
app.get('/contactus', contactController.getContactPage);
app.post('/contactus', contactController.postContactForm);

// Form submission success
app.get('/success', successController.getSuccessPage);

// 404 Page Not Found
app.use((req, res) => {
  res.status(404).render('404');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
