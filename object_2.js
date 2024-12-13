let obj={
    id:1,
    ename:"chandan",
    company:"tcs",
    designation:"devloper",
}
console.log(obj);


// 1. OBJECT METHODS

//object.key()
    let keys = Object.keys(obj)
    console.log(keys); //ouput =  ['id', 'ename', 'company', 'designation']
    
//object.values()
let values = Object.values(obj)
console.log(values);  //ouput =       [1, 'chandan', 'tcs', 'devloper']

//object.entries()
let entries = Object.entries(obj)
console.log(entries);   //ouput= ['id', 1]['ename', 'chandan']['company', 'tcs']['designation', 'devloper']


//object.fromEntries()
let val=Object.fromEntries(entries)
console.log(val);