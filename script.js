"use strict"


let menu = document.querySelector("#menu-bar");
let navber = document.querySelector(".navber");
let headert = document.querySelector(".header2")

menu.addEventListener("click", () =>{
    menu.classList.toggle("fa-times");
    navber.classList.toggle("active");
})

window.onscroll = () =>{
    menu.classList.remove("fa-times");
    navber.classList.remove("active");
    if(window.scrollY > 150){
        headert.classList.add('active');
    }else{
        headert.classList.remove('active');
    }
}









