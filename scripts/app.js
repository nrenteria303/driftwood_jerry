const navBars = document.querySelector("#nav_bars");
const burger = document.querySelector("#nav_bars-burger");
const burgerTop = document.querySelector("#burger-top");
const burgerMid = document.querySelector("#burger-middle");
const burgerBot = document.querySelector("#burger-bottom");
const navContent = document.querySelector("#nav_content");
const navHide = document.querySelector("#nav-hide");

const header = document.querySelector("header");
var downScrollBaseline = 0;
var currentscrollTop = 0;

const homeBlock = document.getElementById("block-content-1");

const leftArrow = document.getElementById("left_arrow");
const rightArrow = document.getElementById("right_arrow");
const slideShow = document.getElementById("gallery_slideshow");
var slidePosition = 0;
var slideshowWidth = 10000;
var slideMoveWidth = 560;

const contactP1 = document.getElementById("contact_p-1");
const contactP2 = document.getElementById("contact_p-2");
const contactP3 = document.getElementById("contact_p-3");

function navTransform() {
    burgerMid.classList.toggle("burger-middle");
    burgerTop.classList.toggle("burger-top");
    burgerBot.classList.toggle("burger-bottom");
    navContent.classList.toggle("nav_content-hide");
    burgerMid.classList.toggle("burger-middle-x");
    burgerTop.classList.toggle("burger-top-x");
    burgerBot.classList.toggle("burger-bottom-x");
    navContent.classList.toggle("nav_content-show");
    navHide.classList.toggle("display-none");
}

function elementShow(element) {
    element.classList.remove("hidden");
    element.classList.add("showing");
}

window.onscroll = function() {
    var a = document.documentElement.scrollTop;
    var menuHideThreshold = 36;
   
    currentScrollTop = a;
   
    if (downScrollBaseline < currentScrollTop && a > 2 * (menuHideThreshold)) {
      header.classList.add("header-up");
    } else if (downScrollBaseline > currentScrollTop && a > menuHideThreshold) {
      header.classList.remove("header-up");
    }
    downScrollBaseline = currentScrollTop;  
}

leftArrow.addEventListener("click", function() {
    if (slidePosition < 0) {
        slidePosition += slideMoveWidth;
        slideShow.style.left = slidePosition + 'px';
        if (slidePosition < 0) {
            rightArrow.classList.remove("inactive");
        } else {
            leftArrow.classList.add("inactive");
        }
    }
});

rightArrow.addEventListener("click", function() {
    if (slidePosition > -slideshowWidth) {
        slidePosition -= slideMoveWidth;
        slideShow.style.left = slidePosition + 'px';
        if (slidePosition > -slideshowWidth) {
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
