const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

// Create global app object
const app = express();

app.use(cors());

// import admin and Registered routes
const adminRoutes = require('./routes/admin')
const RegisteredRoutes = require('./routes/registered');
// const path = require('path/posix');

// call body-parser and register a middleware by yielding with urlencoded
// pass an option to be able to parse non-default feature 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

// serve static files
// app.use(express.static(path.join(__dirname, 'web')));

// call other routes and filter paths
app.use('/admin', adminRoutes);
app.use(RegisteredRoutes);

// handling 404 Error Page
app.use((req, res, next) => {
  res.status(404).send('Page not Found')
})

// Connect to db
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })

// start a server
// const server = http.createServer(app);
// server.listen(3000) instead of these two line and require('http')
app.listen(7000);

