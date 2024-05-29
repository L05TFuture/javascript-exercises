const convertToCelsius = function(Faren) {
return Math.round( (Faren-32)*(5/9) * 10) / 10
};



const convertToFahrenheit = function(degreesCel) {
return Math.round((degreesCel*(9/5)+32)*10)/10
};




// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
