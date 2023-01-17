// const headerArea = document.querySelector('.header-area');

// lastScroll = 0;
// window.addEventListener('scroll', () => {
// 	let currentScroll = window.scrollY;
// 	if (currentScroll > lastScroll) {
// 		headerArea.style.transform = `translateY(${-100}%)`;
// 	} else {
// 		headerArea.style.transform = `translateY(${0}%)`;
// 	}
// 	lastScroll = currentScroll;
// });


const toggleTheme = document.querySelector(".toggle-theme");
const toggleButton = document.querySelector(".toggle-button");
const navbar = document.querySelector("nav");
const body = document.querySelector("body");
const hero = document.querySelector(".hero");

const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

allEventListners();

function allEventListners() {
	navToggler.addEventListener("click", togglerClick);
	navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

function togglerClick() {
	navToggler.classList.toggle("toggler-open");
	navMenu.classList.toggle("open");
}

function navLinkClick() {
	if (navMenu.classList.contains("open")) {
		navToggler.click();
	}
}


const closeSvg = document.querySelector(".close-svg");

closeSvg.addEventListener("click", () => {
	servicePreviewContainer.style.visibility = "hidden";
	body.style.overflow = "auto";
});
