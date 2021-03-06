//? Entry point NODE.Js
const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');
const path = require('path');
const fetch = require("node-fetch");



const app = express();
app.use(express.json());

//Project Endpoint
const projectData = {};

const http = require('http');

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));

app.use(express.static(path.join(__dirname, 'project')));

weatherInfo();

async function weatherInfo() {
  try {
      const res = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1aa7b2ca9ad530109d70c085538b2e75') 
          const data = await res.json();
          console.log(data);
          console.log('Fetch is working');
      } catch(e) {
        console.log(e);
      }
    };