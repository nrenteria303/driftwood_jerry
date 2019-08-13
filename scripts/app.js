const navBars = document.querySelector("#nav_bars");
const burger = document.querySelector("#nav_bars-burger");
const burgerTop = document.querySelector("#burger-top");
const burgerMid = document.querySelector("#burger-middle");
const burgerBot = document.querySelector("#burger-bottom");
const navContent = document.querySelector("#nav_content");
const navHide = document.querySelector("#nav-hide");

const homeBlock = document.getElementById("block-content-1");

let navClicked = false;

const leftArrow = document.getElementById("left_arrow");
const rightArrow = document.getElementById("right_arrow");
const slideShow = document.getElementById("gallery_slideshow");
let slidePosition = 0;

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

function homeBlockShow() {
    homeBlock.classList.remove("hidden");
    homeBlock.classList.add("showing");
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