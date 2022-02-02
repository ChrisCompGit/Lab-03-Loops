const main = (()=>{

let i = 0;
let n = 9;

console.log("For Loop");
for(let i=0; i<=n; i++) 
{
    console.log("I love Programming.");
};


console.log("\nWhile Loop");
while(i<=n) 
{
    console.log("I love Programming.");
    i++;
};


console.log("\nDo While Loop");
i=0;
do 
{
    console.log("I love Programming.");
    i++;
} while(i<=n);

})();