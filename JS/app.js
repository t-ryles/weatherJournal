const app = require('app');

//Setting global var
const zipCode = document.getElementById('zip');
const feelingsInput = document.getElementById('feelings');
const generateBtn = document.getElementById('generate');
const body = document.querySelector('body');


//Add click event to button
generateBtn.addEventListener('click', onClick);

function onClick(){
    alert('Button was clicked');
};


//module.exports = router;