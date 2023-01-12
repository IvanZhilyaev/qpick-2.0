const menuBtn = document.querySelector(".menu-btn");
const menuForBtn = document.querySelector(".menu-for-btn");

menuBtn.onclick = () => {
    menuForBtn.classList.toggle('active');
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