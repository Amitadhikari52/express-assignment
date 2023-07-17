import express from 'express';
import path from 'path';
import { contactUsController, successController, error404Controller } from './controllers';

const app = express();
const users = [];

app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.urlencoded({ extended: true }));

// Setting up View Engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index', { name: 'Adhikari' });
});

app.get('/contactus', contactUsController);
app.post('/success', successController);

// Error404 route
app.use(error404Controller);

app.listen(8100, () => {
  console.log('Server is running');
});
