const menuBtn = document.querySelector(".menu-btn");
const menuForBtn = document.querySelector(".menu-for-btn");
menuBtn.onclick = () => {
    menuForBtn.classList.toggle('active');
}


const menuBtn3 = document.querySelector(".menu-btn3");
const menuForBtn2 = document.querySelector(".menu-for-btn2");
const anotherBar = document.querySelector(".another-bar");
const casesDiv = document.querySelector(".cases-section");
const favSec = document.querySelector(".favorite-section");
menuBtn3.onclick = () => {
    menuForBtn2.classList.toggle('active');
    anotherBar.classList.toggle('active');
    casesDiv.classList.toggle('active');
    favSec.classList.toggle('active');
}




const secMenu = document.querySelector(".adapt-menu-bar");
const menuBtn2 = document.querySelector(".menu-btn2");
menuBtn2.onclick = () => {
    secMenu.classList.toggle('active');
}

//cart

const buttonCart = document.querySelectorAll('.button-cart');
const cart = document.querySelector(".cart")
console.log(cart);
const emptyCart = document.querySelector(".empty-cart-section");

const product = {
    "appleByz": "1",
    "appleByz2": "1",
    "appleEarPods1": "1",
    "appleEarPods2": "1",
    "appleAirPods": "1",
    "gerlaxGH-04": "1",
    "borofoneBO4": "1"
}

document.onclick = event => {
    if (event.target.hasAttribute("data-cart")) {
        emptyCart.style.display = "none";
    }
}