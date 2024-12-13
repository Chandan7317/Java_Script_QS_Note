// Json

let data={
    id:1,
    ename:"raj",
    company:"TCS",
}
console.log(data);
console.log(typeof data);



// JSON.stringify() :Convert JS Srtings to JSON returns It.
let Jsondata= JSON.stringify(data);
console.log(Jsondata);
console.log( typeof Jsondata);



// JSON parse (): :Convert JS object to JSON returns It.

let val =JSON.parse(Jsondata);
console.log(val);
console.log(typeof val);









// //Fetch  method means Api call 

// let p1=fetch("")
// console.log(p1);


// p1.then((Response)=>{
//     console.log(Response);//respone object from server
//     let p2= Response.json();//json() :convert json data to js and returns in a promise
//     console.log(p2);


//     p2.then((products)=>{
//         console.log(products);
        
//     })
//     p2.catch((err)=>{
//         console.log(err);
        
//     })
    
    
// })
// p1.catch((err)=>{
//     console.log(err);
    
// })