//object literals
let obj1 = {
    ename:"Chandan",
    id:1,
    company:"jsp",
    location:"Noida",
}
console.log(obj1);
console.log(obj1.ename);//Read
// console.log(obj1.id);//Read
// console.log(obj1.company);//Read
// console.log(obj1.location);//Read

obj1.location="bangalore"; //update
console.log(obj1);

// if key is not present
console.log(obj1.age); //ud

//adding new key

obj1.salary=10000;
console.log(obj1);

//deletiing a key

delete obj1.id;
console.log(obj1);




//Example 2 


let obj3={
    ename:"abc",
    id:1,
    age:25,
}
console.log(obj3["ename"]);







// //object constructors
// let obj2 =new Object({
//     ename:"Sarvesh",
//     id:1,
//     company:"jsp",
//     location:"UP",
// })
// console.log(obj2);



