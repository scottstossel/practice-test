const { application } = require('express');
const express = require('express');
const axios = require('axios');

//use axios for get requests

//app
const app = express();

//bring routes
const pingRoutes = require('./ping');

//routes

//use axios for api connection


//port
const port = 'https://api.hatchways.io/assessment/blog/posts';
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})