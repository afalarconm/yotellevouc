const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { Client } = require('pg')
const app = express();

const path = require('path')

var client = new Client({
  user: "afalarconm",
  password: "1965Andres$",
  database: "web_db",
  port: 3001,
  host: "host",
  ssl: true
});
client.connect(function () {
  console.log("connected");
});

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/src/components')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/src/components/LandingPage.js'))
})

const routes = require('./routes/index');

const errorHandler = require('./middlewares/errors/errorHandler.js');
const notFound = require('./middlewares/errors/notFound.js');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routes);

app.use(errorHandler);
app.use(notFound);


module.exports = app;