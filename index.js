let inp =document.querySelectorAll("input");
let form = document.querySelector("form")




form.addEventListener("submit",(e)=>{
e.preventDefault();
 
inp.forEach((i)=>{
console.log(i.value)
})
})