// temperature in kelvin
const kelvin = 0;
// convert kelvin to celsius
const celsius = kelvin - 273;
// convert celsius to fahrenheit and rounds the decimal down
let fahrenheit = Math.floor((celsius * (9 / 5)) + 32);
//convert celsius to newton and round down
let newton = Math.floor(celsius * (33/100));

console.log (`The temperature is ${fahrenheit} degrees Fahrenheit and ${newton} newton.`);
