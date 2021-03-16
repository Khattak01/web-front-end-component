// const header = document.querySelector('.main-header');
// window.addEventListener('scroll',()=>{
//     const scrollPosition = window.scrollY;
//     if(scrollPosition > 10){
//         header.classList.add('scrolled')
//     }else[
//         header.classList.remove('scrolled')
//     ]
// })


//function to select the element
const selectElement = (element) => document.querySelector(element);
selectElement('.hamburger').addEventListener('click',()=>{
    selectElement('.hamburger').classList.toggle('active');
    selectElement('.nav-list').classList.toggle('active');
})


//const hamburger = document.querySelector('.hamburger');
// hamburger.addEventListener('click',()=>{
//     hamburger.classList.toggle('active');
// })