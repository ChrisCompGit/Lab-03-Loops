const prompt = require ("prompt-sync")();

const main = (()=>{

let sumOfNumbers = 0;
let avgOfNumbers = 0;
let productOfNumbers = 1;

for(let i=1; i<6; i++)
{
    const num = parseInt(prompt("Please enter a number: "));

    sumOfNumbers+=num;
    avgOfNumbers = sumOfNumbers / i;   
    productOfNumbers*=num;
    
    console.log("\n");
    console.log(`The sum of all numbers entered is: ${sumOfNumbers}`);
    console.log(`The average of all numbers entered is: ${avgOfNumbers}`);
    console.log(`The product of all numbers entered is ${productOfNumbers}`);
    console.log("\n");
}

})();