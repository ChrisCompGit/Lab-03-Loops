const prompt = require ("prompt-sync")();

const main = (()=>{

let i = 1;
let smallestNumber = "";
let largestNumber = "";

while(i<=5)
{
    const num = parseInt(prompt("Please enter a number: "));
    i++;
    if (num>largestNumber)
    {
        largestNumber=num;
    }
    else if (num<smallestNumber)
    {
        smallestNumber=num;
    }
}   

    console.log("\n");
    console.log(`\nThe smallest number is: ${smallestNumber}`);
    console.log(`\nThe largest number is: ${largestNumber}`);
    console.log("\n");
})();