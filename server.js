// Module dependencies.
const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const path = require('path');
const fetch = require("node-fetch");

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

// Body parser middleware
app.use(express.urlencoded({extended: false}));

//Project Endpoint
const projectData = {};

//API Key
var APIKey = '0f4c4e121f7fc9cce5b749ee1f57fb90';

//URL
const url =`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${APIKey}`;

//Server
// const http = require('http');
// const { response } = require('express');

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));

const newLocal = 'index.html';
app.use(express.static(path.join(__dirname, newLocal)));

// weatherInfo();
// //var zipCode = '524901';

// async function weatherInfo() {
//   try {
//       const yes = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${APIKey}`) 
//           const data = await yes;
//           response.send(data);
//           console.log('Fetch is working');
//       } catch(e) {
//         console.log(e);
//     }
// };

app.get('/index.html', (req, res) => res.render('index', {
  
}));

module.exports = app;