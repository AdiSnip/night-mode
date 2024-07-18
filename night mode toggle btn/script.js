let loader = document.querySelector(".loader");
setTimeout(()=>{
    loader.style.display = "none" ;
},2000);

//btn create

let mode="light";

let btn = document.querySelector(".btn")
let roll =document.querySelector(".roll")
let time= document.querySelector("#time");

btn.addEventListener("click",(e)=>{
      document.body.classList.toggle("mode")
      btn.classList.toggle("btn2")
      if(mode==="light"){
        time.src="night.png"
        mode = "dark"
        roll.style.transform="translateX(-70%)"
        roll.style.backgroundColor="white"
      } else if(mode === "dark"){
        time.src="day.png"
        mode ="light"
        roll.style.transform="translateX(70%)"
        roll.style.backgroundColor="rgb(39, 39, 39)"
      }
})

