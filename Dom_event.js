

// // DOM event

// 1.onclick()

// function clickme(){
//     console.log("BTN is CLICKED ");
    
// }

// function double(){
// console.log("DOUBLE CLICKED");

// }


// function cursorEnter(){
//     console.log("MOUSE ENTERED");
    
// }

// function cursorleave(){
//     console.log("MOUSE LEFT");
    
// }

// function cursorMove(){
//     console.log("MOUSE MOVED");
    
// }

// function keyPressed(){
//     console.log("KEY IS PRESSED");
    
// }
// function keyReleased(){
//     console.log("KEY IS Released");
    
// }

// Example 1

function formsubmit(e){
    e.preventDefault();
    console.log(e);
    

       // let email=document.getElementById("email")
       // let password=document.getElementById("Password")
   
   
       // console.log(email.value,password.value);
       
       // console.log({email:email.value, password:password.value});
   
       let email=document.getElementById("email").value;
       let password=document.getElementById("Password").value;
       console.log({email,password});
    
   }


// Example 2

// let btn=document.getElementById("btn")
// console.log(btn);

// element.addEventListener(even,callback_function,use capture)

// btn.addEventListener("click",()=>{
//     console.log("btn clicked");
    
// })


// Example 3

// let alldiv=document.querySelectorAll("div")

// alldiv.forEach((ele)=>{
//    ele.addEventListener("mouseover",()=>{
//     ele.style.backgroundColor=ele.textContent;
//    })


//    ele.addEventListener("mouseout",()=>{
//     ele.style.backgroundColor="white";
//    })
   
// })

// Example 4

let section=document.querySelector("section")
let article=document.querySelector("article")
let div=document.querySelector("div")

section.addEventListener("click",(e)=>{
    e.stopPropagation()
    section.style.backgroundColor="red";
    console.log("section"); 
},0)

article.addEventListener("click",(e)=>{
    e.stopPropagation()
    article.style.backgroundColor="blue";
    console.log("article"); 
},0)

div.addEventListener("click",(x)=>{
    x.stopPropagation()
    div.style.backgroundColor="green";
    console.log("div"); 
},0)



// 0 bubbling phase
// 1 use capture


// <!-- Example 5 -->

// let main=document.querySelector("main")
// let nav=document.querySelector("nav")


// main.addEventListener("click",()=>{
//     console.log("I am Main"); 
// },0)

// nav.addEventListener("click",(e)=>{
//     e.stopImmediatePropagation() //it will be stop event Propagation and other addEventlistner attached to the same element
//     console.log("I am Nav"); 
// },0)

// nav.addEventListener("click",()=>{
//     console.log("I am 2nd AddEvent"); 
// },0)
