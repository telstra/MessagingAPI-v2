// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
var debug = require('debug')('node-rest:server');
var logger = require('morgan');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || 8080,
ip   = process.env.IP || '127.0.0.1';

app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`** API running on ${ip}:${port}`));

// Get our API routes
const api = require('./server/routes/api');

// Parsers for POST data
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// set up socket 
var io = require('socket.io')(server);
app.set('socketio', io);
io.on('connection', (socket) => {
  console.log('user connected', io.engine.clientsCount);
  io.emit('user_connected', io.engine.clientsCount);

  socket.on('disconnect', function(){
    console.log('user disconnected', io.engine.clientsCount);
    io.emit('user_disconnected', io.engine.clientsCount);
  });
});