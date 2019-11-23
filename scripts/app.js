const navBars = document.querySelector("#nav_bars");
const burger = document.querySelector("#nav_bars-burger");
const burgerTop = document.querySelector("#burger-top");
const burgerMid = document.querySelector("#burger-middle");
const burgerBot = document.querySelector("#burger-bottom");
const navContent = document.querySelector("#nav_content");
const navHide = document.querySelector("#nav-hide");

const header = document.getElementsByTagName("header")[0];
var c = 0;
var currentscrollTop = 0;

const homeBlock = document.getElementById("block-content-1");

let navClicked = false;

const leftArrow = document.getElementById("left_arrow");
const rightArrow = document.getElementById("right_arrow");
const slideShow = document.getElementById("gallery_slideshow");
let slidePosition = 0;

const contactP1 = document.getElementById("contact_p-1");
const contactP2 = document.getElementById("contact_p-2");
const contactP3 = document.getElementById("contact_p-3");

function navTransform() {
	if (!navClicked) {
    	burgerMid.classList.remove("burger-middle");
    	burgerTop.classList.remove("burger-top");
        burgerBot.classList.remove("burger-bottom");
        navContent.classList.remove("nav_content-hide");
        burgerMid.classList.add("burger-middle-x");
    	burgerTop.classList.add("burger-top-x");
        burgerBot.classList.add("burger-bottom-x");
        navContent.classList.add("nav_content-show");
        navHide.style.display = "block";
    } else {
    	burgerMid.classList.remove("burger-middle-x");
    	burgerTop.classList.remove("burger-top-x");
        burgerBot.classList.remove("burger-bottom-x");
        navContent.classList.remove("nav_content-show");
        burgerMid.classList.add("burger-middle");
    	burgerTop.classList.add("burger-top");
        burgerBot.classList.add("burger-bottom");
        navContent.classList.add("nav_content-hide");
        navHide.style.display = "none";
    }
	navClicked = !navClicked;
}

function elementShow(element) {
    element.classList.remove("hidden");
    element.classList.add("showing");
}

window.onscroll = function() {
    var a = document.documentElement.scrollTop;
    var b = 40;
   
    currentScrollTop = a;
   
    if (c < currentScrollTop && a > b + b) {
      header.classList.add("header-up");
    } else if (c > currentScrollTop && a > b) {
      header.classList.remove("header-up");
    }
    c = currentScrollTop;  
}

leftArrow.addEventListener("click", function() {
    if (slidePosition < 0) {
        slidePosition += 600;
        slideShow.style.left = slidePosition + 'px';
        if (slidePosition < 0) {
            rightArrow.classList.remove("inactive");
        } else {
            leftArrow.classList.add("inactive");
        }
    }
});

rightArrow.addEventListener("click", function() {
    if (slidePosition > -7800) {
        slidePosition -= 600;
        slideShow.style.left = slidePosition + 'px';
        if (slidePosition > -7800) {
            leftArrow.classList.remove("inactive");
        } else {
            rightArrow.classList.add("inactive");
        }
    }
});

function contactP2Show() {
    contactP2.classList.remove("hidden");
    contactP2.classList.add("showing");
}

function contactP3Show() {
    contactP3.classList.remove("hidden");
    contactP3.classList.add("showing");
}

function contactPShowTimeout() {
    elementShow(contactP1);
    setTimeout(contactP2Show, 700);
    setTimeout(contactP3Show, 1500);
}
