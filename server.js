// Module dependencies.
const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const path = require('path');
const fetch = require("node-fetch");



//Creat server
const app = express();
app.use(express.json());

//parses request body and populates request.body
app.use(bodyParser.urlencoded({extended: false}));

//Project Endpoint
const projectData = {};

//API Key
var APIKey = '1aa7b2ca9ad530109d70c085538b2e75';

const http = require('http');
const { response } = require('express');

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));

app.use(express.static(path.join(__dirname, 'index.html')));

// weatherInfo();
//var zipCode = '524901';

// async function weatherInfo() {
//   try {
//       const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${APIKey}`) 
//           const data = await res.json();
//           console.log(data);
//           console.log('Fetch is working');
//       } catch(e) {
//         console.log(e);
//     }
// };

const url =`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${APIKey}`;

// fetch (URL)
// .then(data =>({return :data.json()}))
// .then (res =>{console.log(res)})
// .catch(error => console.log(error));

const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers : data ? 'Content-Type: application/json' : {}
  }).then (response => {
    return response.JSON()
  });
};

const getData = () => {
  sendHttpRequest('GET', url).then(responseData => {
    console.log(responseData);
  })
};

const sendData = () => {
  sendHttpRequest('POST', url, {
    zipCode : {},
    input : ''
  })
};