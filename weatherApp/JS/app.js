//Setting global var
const feelingsInput = document.getElementById('feelings');
const generateBtn = document.getElementById('generate');


//Add click event to button
generateBtn.addEventListener('click', inputZipCode);
//User zip code inupt
function inputZipCode() {
    var zipCode = document.getElementById('zip').value;
    console.log(zipCode);
    return zipCode;
};

module.exports = { 
    zipCode
};