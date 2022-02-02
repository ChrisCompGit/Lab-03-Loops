const prompt = require ("prompt-sync")();

const main = (()=>{

let avgOfOddNumbers = 0;
let sumOfOddNumbers = 0;
let numOfOddNumbers = 0;
let NUM_OF_ITERATIONS = 6;

for(let i=1; i<=NUM_OF_ITERATIONS; i++)
{
    const num = parseInt(prompt("Please enter a number: "));

    if(num % 2 == 0)
    {

    }
    else
    {
        sumOfOddNumbers+=num;
        numOfOddNumbers++;
        avgOfOddNumbers = sumOfOddNumbers/numOfOddNumbers;

    }
}
    console.log("\n");
    console.log(`\nThe sum of all odd numbers is: ${sumOfOddNumbers}`);
    console.log(`\nThe number of all odd numbers entered is: ${numOfOddNumbers}`);
    console.log(`\nThe average of all odd numbers is: ${avgOfOddNumbers.toFixed(2)}`);
    console.log("\n");
})();