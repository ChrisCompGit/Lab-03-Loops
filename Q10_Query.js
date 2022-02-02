const prompt = require ("prompt-sync")();

const main = (()=>{

let validAge = false;

//part a.

while (validAge === false)
{
    let i = 0;
    const age = parseInt(prompt("Please enter your Age: "));
    i++;

    if (isNaN(age) === true || age <10 || age > 16)
    {
        console.log("\n***** ERROR *****");
        console.log("Please enter a valid age.\n");
    }
    else
    {
        validAge === true;
        break;
    }
    
} 

//part b.

let sumOfNumbers = 0;
let avgOfNumbers = 0;
let end = false;    
let i = 0;

let smallestNumber = ``;
let largestNumber = ``;

while (end === false)
{

    const num = parseInt(prompt("Please enter a set of numbers to find the overall average or enter END to exit: "));

    if (isNaN(num) === true)
    {
        end = true;   
    }    
    
    else
    {
        i++
        sumOfNumbers+=num;
        avgOfNumbers = sumOfNumbers / i;
    }

    console.log(`The average of all numbers entered is: ${avgOfNumbers.toFixed(2)}.`);
    console.log("\n");

//part c.

    if (num<=smallestNumber)
    {
        smallestNumber = parseInt(num);
    }

    else if (num>=largestNumber)
    {
        largestNumber = parseInt(num);
    }
}

    console.log(`\nThe smallest number is: ${smallestNumber}`);
    console.log(`${typeof(smallestNumber)}`)
    console.log(`\nThe largest number is: ${largestNumber}`);
    console.log(`${typeof(largestNumber)}`)
    console.log("\n");

})();