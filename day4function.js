// There are 11 types of function
//1. Name Function

// function csk(){
//     console.log("CSK");
//     console.log("Dhoni");
//     console.log("Raina");
//     console.log("Sameer");
// }

// function rcb(){
//     console.log("Rcb");
//     console.log("Virat");
//     console.log("FAf");
//     console.log("Patidar");
// }

// rcb()
// csk()
// csk()



// // 2 .ANONYMOUS FUNCTION

// var a=function(){
// console.log("i am anonymous function");

// };
// console.log(a);



// // 3 .FUNCTION Expression
var a=function(){
    console.log("i am anonymous function");
    };
    console.log(a);
    a();
    

// // 4 .Parameterized FUNCTION

// // Parameter
// function party(person){
//     console.log("Welcome "+person); 
// }

// party("Raj");  //argument
// party("Ram");
// party("basab");



// // Q2 
// function add(n1 ,n2)
// {
//     console.log(n1+n2);
// }
// add(10, 20)

// //    Q3 
// function abc(n1){
//     console.log(n1);
//     console.log(arguments);
// }
//     abc(10,20,30,405,50)

// // 5. Return type Function  

// function addition(n1, n2){
//     let result=n1+n2
//     console.log(result);
//     return result   
// }
// let val=addition(10,20);
// console.log(val);

// // 6.HOF  and CALLBACK Function

//We can say Call back
function sum(n1 ,n2){
    console.log(n1+n2); 
}
// We say Heigher oder function is Except
function calculate(a,b,fun){
    fun(a,b);
}
calculate(20,20, sum);


// what diff b/t rest parameter and argument parameter

// debugger;
// 7.nested function 
// Example 1
// function perent(){
//     let money=500000;
//     console.log(money);

//     function child(){
//         let savings=500;
//         console.log(savings);
//     }
//     child();
    
// }
// perent();


// Exmple 2

// function perent(){
//     let money=500000;
//     console.log(money);

//     function child(){
//         let savings=500;
//         console.log(savings+money);
//     }
//    return child();
    
// }
// let fun =perent();
// console.log(fun);
// fun()

// Exmple 3
// function perent(){
//     let money=500000;
//     console.log(money);

//     function child(){
//         let savings=500;
//         console.log(savings+money);
//     }
//    return child;
    
// }
// perent()() //js currying

// When a perent function is returing one child function and if we want to call that function without storing it into a veriable then use one more parenthesis this process in known as js currying


// Exmple 3
// function father(){
//     var x="hello";
//         console.log(x);
        

//         function son(){
//             var x="bye";
//             console.log(x);
            
//         }
//         son();
//         console.log(x); 
// }
// father();
// debugger;

// function qsp()
// {
//     var course1="java";
//     let course2="Mern";
//     const course3="testing";
//     console.log(course1, course2, course3); 
    
//     function trainer(name){
//         console.log(name,course2);

        
//     }
//     return trainer;
// }

// let t1=qsp();
// console.log(t1);
// t1("prasad");





//8. IIFE

// (function(){
//     console.log("I am IIFE");
    
// })();

// (function(){
//     console.log("I am IIFE 2");
    
// })();


//9.ARROW FUNCTION
debugger;
let x = () =>{
console.log("I am arrow Function");
};
x()

// Way 1 
let a = (_) =>{
    console.log("Way1");
    
}
a()

// Way 2 
let b = n1 =>{
    console.log("Way 2",n1);
    
}
b(10)

// explicit return

let c = () =>{
    return "explicit";
}
console.log(c());

// implicit return

let d = () => "implicit";
console.log(d());



