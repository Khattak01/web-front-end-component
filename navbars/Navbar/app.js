// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//     link.classList.toggle("fade");
//   });
// });

//document.getElementsByClassName("navigation__checkbox")[0] == true
document.getElementsByClassName("navigation__checkbox")[0].addEventListener('click',()=>{
  if(document.getElementsByClassName("navigation__checkbox")[0]){
    console.log("checked");
    return;
  }
})
