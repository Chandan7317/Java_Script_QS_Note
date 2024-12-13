// global variables



var a=10;
let b=20;
const c=30;

for(let i=0;i<5;i++)
{
    console.log(a,b,c);//global variable
var x=100; //it will act as global variable
let y=200; //it will act as local variable
const z=300;//it will act as local variable
console.log(x,y,z);  
}

console.log("-------",x);


// if(10>2){
//     console.log(a,b,c);
// }

function abc(){
    console.log(a,b,c);//global variable
    var m="hello" //local
    let n="Hii"//local
    const o="byee"//local
    console.log(m,n,o);  
}
abc();

console.log(m);//error ,m is not defined bcoz m is local to function

