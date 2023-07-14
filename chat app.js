const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

// Set up session middleware
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: false }));

const data = [];

app.get('/login', (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form action="/login" method="post">
      <input type="text" name="username" placeholder="Enter your username" required>
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { username } = req.body;
  req.session.username = username; // Store the username in the session
  res.redirect('/');
});

app.get('/', (req, res) => {
  const username = req.session.username; // Retrieve the username from the session
  const messageForm = `
    <h1>Welcome ${username}</h1>
    <form action="/" method="post">
      <input type="text" name="message" placeholder="Enter your message" required>
      <button type="submit">Send</button>
    </form>
  `;

  let messages = '<h2>Messages:</h2><ul>';
  data.forEach(message => {
    messages += `<li>${message.username}: ${message.message}</li>`;
  });
  messages += '</ul>';

  res.send(messageForm + messages);
});

app.post('/', (req, res) => {
  const username = req.session.username; // Retrieve the username from the session
  const message = req.body.message;
  data.push({ username, message }); // Store the message in the data array
  res.redirect('/');
});

app.listen(3300, () => {
  console.log('Server is running on port 3300');
});

