const prompt = require ("prompt-sync")();

const main = (()=>{

let sumOfNumbers = 0;
let end = false;

while (end === false)
{
    const num = parseInt(prompt("Please enter a number or enter END to exit: "));
    if (isNaN(num) === true)
    {
        end = true   
    }    
    else
    {
        sumOfNumbers+=num;
        console.log(`The sum of all numbers entered is: ${sumOfNumbers}`);
    }
}

})();