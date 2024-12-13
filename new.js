let obj={
    id:1,
    fname:"Jhon",
    lname:"Doe",

    getFullName:function(){
        console.log(`${this.fname} ${this.lname}`);
        
    },
    getEmail:function (){
        console.log(`${this.fname}${this.lname}@gmail.com`);
        
    },
};
obj.getFullName();
obj.getEmail();

// Example 2
let btn=document.querySelector("button")
console.log(btn);

btn.addEventListener("click",()=>{
console.log("Button Click");

for

})