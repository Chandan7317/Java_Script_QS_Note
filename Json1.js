
// Example 1 

let p1=fetch("https://fakestoreapi.com/products")
console.log(p1);


p1.then((resp)=>{
    console.log(resp);

    let p2=resp.json();
    console.log(p2);
    
    p2.then((product)=>{
        console.log(product);
        
    })
})



// Example 2


// async function fetchproduct(){
//     let resp=await fetch("https://fakestoreapi.com/products")
//     let product=await resp.json();
//     console.log(product);
    
// }
// fetchproduct();












