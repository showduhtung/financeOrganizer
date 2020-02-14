const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const port = process.env.PORT || 3000;
const morgan = require('morgan');
module.exports = app;

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

// Static Middleware
app.use(express.static(DIST_DIR));

// Logging Middleware
app.use(morgan('dev'));

// Parsing Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// auth and api routes
// app.use('/auth', require('./auth'));
app.use('/api', require('./api'));

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});
app.listen(port, function() {
    console.log('Finance App listening on port: ' + port);
});
