

// 1 document.getElementById("id Value")

//  It target the element with specific id value and return it

let container=document.getElementById("section_1");
console.log(container);


// 2 document.getElementsByClassName("classname_value")

// It target the element with specific class value and return an HTMLCollection

let contentContainer=document.getElementsByClassName("content");
console.log(contentContainer);
console.log(contentContainer[2]);

// Array.isArray()
// It is used to check wheather array is pure or not and returns boolean value . we con not use any of the array method in HTMLCollection

console.log(Array.isArray(contentContainer));

// Array.from()
// It accpets impure array and convert it into pure array and returns it.

let pureArray= Array.from(contentContainer);
console.log(contentContainer);


pureArray.map((ele)=>{
    console.log(ele);
    
})


// let footer=document.getElementsByClassName("foot")[0];
// console.log(footer);



// 3. tag name

let div=document.getElementsByTagName("div")[2]
console.log(div);





