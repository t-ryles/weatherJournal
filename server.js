//Project Endpoint
const projectData = {};

// Module dependencies.
const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const path = require('path');
const { default: fetch } = require('node-fetch');
const zipCode = require('/weatherApp/JS/app.js');

//Instance of app
const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Cors middleware
app.use(cors());

//Bring in the weatherApp folder
app.use(express.static(path.join(__dirname, 'weatherApp')));

//API variables
const APIKey = '';
//let zipCode = '68503';
//URL
const url =`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${APIKey}`;

//Port setup
const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

//Fetching the openweather API data
// weatherData().catch(error => {
//   console.log('error!');
//   console.error(error);
// })

// async function weatherData () {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   // console.log(data.main.temp);
//   // console.log(data.main.feels_like);
//   return data;
// };

const getWeather = async(url) => {
  const res = await fetch(url) 
  try {
    const data = await res.json();
    console.log(data);
  }catch(error) {
    console.log('error', error);
  }
}
// console.log(getWeather);

// POST route
// app.post('./weatherApp/index.html', callBack);

// function callBack(req,res){
//   res.send('POST received');
// };

// //Post data
// const data = [];

// app.post('/weatherApp/index.html', addWeatherData);

// function addWeatherData (req,res){
//     data.push(req.body);
// };

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));