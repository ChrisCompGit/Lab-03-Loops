const prompt = require ("prompt-sync")();

const main = (()=>{

let sumOfNumbers = 0;

for(let i=1; i<6; i++)
{
    const num = parseInt(prompt("Please enter a number: "));
    sumOfNumbers+=num;
    console.log(`The sum of all numbers entered is: ${sumOfNumbers}`);
}

})();