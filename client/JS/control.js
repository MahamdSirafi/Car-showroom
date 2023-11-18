let f = true;
let mnue = document.querySelector(".mnue");
let ul = document.querySelector("nav ul");
function addmnue() {
  if (f == true) {
    ul.style.cssText =
      "display: flex; flex-direction: column; position: absolute; top: 100%;  left: 0; width: 100%; background-color: rgb(0 0 0/50%);";
  } else {
    ul.style.cssText = "display: none";
  }
  f = !f;
}
mnue.addEventListener("click", addmnue);




// const section_left = document.querySelector(".section-left");
// const section_right = document.querySelector(".section-right");
// const loader=document.querySelector("#loader");
// window.addEventListener("load", () =>{
//   section_left.style.transition = "all 0.4s ease-out";
//   section_right.style.transition = "all 0.4s ease-out";
//   section_left.style.transform = "translateX(-800px)";
//   section_right.style.transform = "translateX(+800px)";
//   loader.style.display = "none";
// })  ; 


