

// es5
// console.log("send me your account number sharp")
// var writeup = "I am tired"

// function Itisforeba() {
// alert(writeup)
// }
var hamburgerdiv = document.querySelector(".hamburger")
var mobileLinks = document.querySelector(".mobile-links-holder");
var backdrop = document.querySelector(".backdrop")
// console.log(hamburgerdiv)

function Itisforeba() {
    hamburgerdiv.classList.toggle("showburger")
    mobileLinks.classList.toggle("show-mobile-links-holder")
    backdrop.classList.toggle("show-backdrop")
}