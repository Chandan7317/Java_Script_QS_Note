// Example 1
// Creating Element using DOM
// let h1=document.createElement("h1")
// h1.textContent="Hello World"


// let h2=document.createElement("h2")
// h2.textContent="Hello Universe"

// appendChild() It will accept only one arguement
// append : It will accept multiple  arguement
// document.body.append(h1,h2)


// Example 2

async function fetchAPI(){
     let resp=await fetch("https://fakestoreapi.com/products")
     let data =await resp.json()
     console.log(data);
     


data.map((ele)=>{
  let h1=document.createElement("h1")
  h1.textContent=ele.title


  let image=document.createElement("img")
  image.setAttribute("src",ele.image)
  console.log(image);
  document.body.append(h1,image)
  

})
}
fetchAPI()