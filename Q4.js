const prompt = require ("prompt-sync")();

const main = (()=>{

endProgram = false;

do
{
    let tables = parseInt(prompt("Enter any number > 1 to see its the time tables or < 1 to exit: "));
    if (tables >0)
    {
        for(let i=1; i<=12; i++)
        {
            const result = i * tables;
            console.log(`${i} x ${tables} = ${result}`);   
        }
    }
    else
    {
        endProgram = true;
    }
}
while (endProgram === false);
    
})();