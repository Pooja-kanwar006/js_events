let inp = document.querySelectorAll("input");
let form = document.querySelector("form");
let main = document.querySelector(".main");
let sub=document.querySelector("#submit");
console.log(sub);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data=[];
  inp.forEach((i) => {
    data.push(i.value);
  });
 console.log(data)
    let card = document.createElement("class");
    card.classList.add("card");
    let profile = document.createElement("profile");
    profile.classList.add("profile");
    let img = document.createElement("img");
    img.setAttribute(
      "src",
      data[3],
    );
   
    profile.appendChild(img);
    card.appendChild(profile)

    let h3=document.createElement("h3");
    h3.textContent = data[2];
    let h5=document.createElement("h5");
    h5.textContent=data[1];
    let p=document.createElement("p");
    p.textContent=data[0];
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);
    main.appendChild(card);
    inp.forEach((i)=>{
   if(i.value !="submit"){
   i.value="";
   }
    })
  
});
