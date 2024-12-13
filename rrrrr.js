const btn = document.getElementById("button");
const Colorchange = () => {
  let val = "0123456789ABCDEF";
  let cha = "#";
  for (let i = 0; i < 6; i++) {
     cha= cha + val[Math.floor(Math.random()* 16)]; }
  return cha;
};
console.log(Colorchange())
btn.addEventListener("click", function(){
  document.body.style.backgroundColor = Colorchange();
});
