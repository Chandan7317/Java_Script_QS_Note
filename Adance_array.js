// 1. foEach() :  it is higher order function which accept callback function .it is used to iterate  an array .callback function accept 3 parameter .we can not anything




// let arr =[10,20,30,40,50];
// for(let i=0;i<=arr.length - 1;i++)
// {
//     console.log(arr[i]);
    
// }


// Exaple 1
// let arr =[10,20,30,40,50];
// arr.forEach(function(x,y,z){
//     console.log(x,y,z);
    
// });


//exmple 2
// let arr =[10,20,30,40,50];
// arr.forEach((Ele,i,array) =>{
//     console.log(Ele,i,array);
    
// })


// 2. map(): it is higher order function which accept callback function .it is used to iterate  an array .callback function accept 3 parameter .it returns a new array.




let val3=arr.forEach((Ele,i,array) =>{
    console.log(Ele,i,array);
    return "I am forEach";
    
})
console.log(val3);

let val2=arr.map((Ele,i,array) =>{
    console.log(Ele,i,array);
    return "I am map"
})
console.log(val2);


//3 .filter

// let arr= [10,20,30,40,50];
// let filteredVal = arr.filter((ele,i,array) =>{
//     console.log(ele,i,array);
//     return ele===30; 
// });
// console.log(filteredVal);


// //find
//  let arr= [10,20,30,40,30,50];
// let val = arr.find((ele,i,array) =>{
//     console.log(ele,i,array);
//     return ele===30; 
// });
// console.log(val);



//4 reduce
// Exmple 1

// let arr=[10,20,30,40,50];
//     let val =arr.reduce((acc, ele) =>{
//         console.log(acc,ele);
        
//         return acc+ele
        
//     })
// console.log(val);

//Exmple 2
// let arr1=[10,20,30,40,50];
//     let val1 =arr.reduce((acc, ele) =>{
//         console.log(acc,ele);
    
        
//     },200)










