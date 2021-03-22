//Project Endpoint
const projectData = {};

// Module dependencies.
const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const { default: fetch } = require('node-fetch');
const zipCode = require('./server');
const { json } = require('body-parser');


console.log('this should log the ' + zipCode);
const app = express();


//API variables
var APIKey = '568078774ee955d4329869fe95c21137';

//URL
const url =`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${APIKey}`;


//Middleware
app.use(cors());

//Bring in the weatherApp folder
//app.use(express.static(path.join(__dirname, 'weatherApp')));

// Body parser middleware
app.use(express.urlencoded({extended: true}));

//Port setup
const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

//Fetching the openweather API data
weatherData().catch(error => {
  console.log('error!');
  console.error(error);
})

async function weatherData () {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  // console.log(data.main.temp);
  // console.log(data.main.feels_like);
  return data;
};

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));