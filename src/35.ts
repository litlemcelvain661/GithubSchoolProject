// Example of a simple Node.js server using ExpressJS and BodyParser

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Your API routes here

module.exports = app;
