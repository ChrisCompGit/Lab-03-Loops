const prompt = require ("prompt-sync")();

const main = (()=>{

let numOfPositiveNumbers = 0;
let sumOfNegativeNumbers = 0;

for(let i=1; i<7; i++)
{
    const num = parseInt(prompt("Please enter a number: "));

    if(num>0)
    {
        numOfPositiveNumbers++
    }

    else
    {
        sumOfNegativeNumbers+=num
    }
           
}

    console.log("\n");
    console.log(`The number of all +ve numbers entered is: ${numOfPositiveNumbers}`);
    console.log(`\nThe sum of all -ve numbers entered is: ${sumOfNegativeNumbers}`);
    console.log("\n");

})();