const prompt = require ("prompt-sync")();

const main = (()=>{

    const tables = parseInt(prompt("Please enter any number to see it's the time tables till 12: "));
    
        for(let i=1; i<=12; i++)
        {
            const result = i * tables;
            console.log(`${i} x ${tables} = ${result}`)
        }
    
    })();
