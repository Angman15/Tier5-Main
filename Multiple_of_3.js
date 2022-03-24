const prompt = require('prompt-sync')();
const num = prompt('Enter a number: ');



if (num % 3 == 0)
console.log(num)
else 
console.log('Not a multiple of 3')