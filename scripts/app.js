const navBars = document.querySelector("#nav_bars");
const burger = document.querySelector("#nav_bars-burger");
const burgerTop = document.querySelector("#burger-top");
const burgerMid = document.querySelector("#burger-middle");
const burgerBot = document.querySelector("#burger-bottom");
const navContent = document.querySelector("#nav_content");
const navHide = document.querySelector("#nav-hide");

let navClicked = false;

function navTransform() {
	if (!navClicked) {
    	burgerMid.style.opacity = '0';
    	burgerTop.style.top = '15px';
        burgerTop.style.transform = 'rotate(45deg)';
        burgerBot.style.top = '15px';
        burgerBot.style.transform = 'rotate(-45deg)';
        navContent.style.top = "70px";
        navHide.style.display = "block";
    } else {
        burgerMid.style.opacity = '1';
        burgerTop.style.top = '4px';
        burgerTop.style.transform = 'none';
        burgerBot.style.top = '26px';
        burgerBot.style.transform = 'none';
        navContent.style.top = "-134px";
        navHide.style.display = "none";
    }
	navClicked = !navClicked;
}