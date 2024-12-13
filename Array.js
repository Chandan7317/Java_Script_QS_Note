
// Two Way

//1 Array literals

// let arr1=[10]

// 2 Array constructor

// let aar2=new Array(10);



// 1 Examole
// let arr1 = [];
// arr1[0]=10;
// arr1[1]=20;
// console.log(aar1);

// let arr2 = new Array(10);{
//     arr1[2]=10;
//     arr1[9]=100;
//     arr1[15]=788;
//     console.log(aar2);
// }


// 2 Examole

// let arr =[10,20,30,40,50];
// console.log(arr.length-1);
// console.log(arr[2]);

// 1. // Push 

// arr.push("Chandan")
// console.log(arr);

// 2. PoP 

// let popedVal=arr.pop()
// console.log(popedVal);
// console.log(arr);


// 3. unshift():add element At 0th index

// arr.unshift("Welcome")
// console.log(unshift);




// 4.shift():remove element from 0th index returns it
// let val =arr.shift();
// console.log(val);
// console.log(arr);


// 5. slice(start index end index):it extract apartfrom an array ,it accepts two arguement start index and end index ,in which end index always gets ignored

//it do not affect the original array


// let aar2=[100.200,300,400];
// let slicedArr=arr2.sliced(1,2);
// console.log(slicedArr);
// console.log(arr2);





// 6 .splice (start index no of element you want to delete ,element you want to add)
// Add
// let arr3=[10,20,30,40,50,60,70,80];
// arr3.splice(3,0,2000)
// console.log(arr3);//[10,20,30,2000,40,50,60,70,80]


// //add
// let arr4=[1,2,3,4,5,6,7]
// arr4.splice(1,5,700,300,500,600)
// console.log(arr4);

// 7 .indexoff() it accept is not persent it returns -1 
let arr6 =[10,20,30,40,50,]
console.log(arr6.indexOf(40));//3
console.log(arr6.indexOf(100));//-1 

// 8 .include():it check the wheather the element is persent in the array on not ,if it is persent it retur true else fale 

console.log(arr6.includes(50));//true 
console.log(arr6.includes(100));//false

// 9. At(): It accepts index value as an argument and the element of that index value .if index is not availabele it returns undefined.

console.log(arr6.at(3));//40
console.log(arr6.at(6));//un
console.log(arr6.at(-5));//10


// 10. concat() : to concat two or more array and returns a single array

let a1=[10,20,30,];
let a2=[40,50,60];
console.log(a1.concat(a2));
console.log(a1.concat(a2,a1));
console.log(a2.concat(a2,a1));



// 11. toString() :its convert array string and returns it

let arr=[10,"hello",50];
console.log(arr.toString());//10 hhello,50

// 12. Join():it convert array into string it.it accepts seperator as an argument
let arr1=[10,20,30];
console.log(arr1.join("Chandan"));


// 13 .reverse() :to reverse an array

let aar2 =[10,3,50,5000];
console.log(aar2.reverse());




