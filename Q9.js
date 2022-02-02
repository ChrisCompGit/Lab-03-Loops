const prompt = require ("prompt-sync")();

const main = (()=>{

let YEAR_LOOP = 4;

const startYear = parseInt(prompt("Please enter a START year: "));
const endYear = parseInt(prompt("Please enter an END year: "));
let intervalYear = startYear;

console.log(`Your start year is ${startYear}`);

for(let i=startYear; i<=endYear; i++)
{
    if (startYear >=0  &&  startYear <= endYear)
    {
        let leapYear = intervalYear++;

        if (leapYear % YEAR_LOOP === 0)
        {
            console.log(`Leap Year: ${leapYear}`);
        }
    }
}

console.log(`Your end year is ${endYear}`);

})();