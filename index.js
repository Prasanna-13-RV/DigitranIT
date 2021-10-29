const black1 = document.querySelector(".black1");
const black2 = document.querySelector(".black2");
const black3 = document.querySelector(".black3");
const black4 = document.querySelector(".black4");
const black5 = document.querySelector(".black5");
const black6 = document.querySelector(".black6");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const img6 = document.querySelector(".img6");

var x = window.matchMedia("(min-width: 500px)");

const myFunction = (x) => {
	if (x.matches) {
		const hoverEffect = (image, button) => {
			image.addEventListener("mouseover", () => {
				button.style.opacity = "1";
			});
			image.addEventListener("mouseout", () => {
				button.style.opacity = "0";
			});
		};
		hoverEffect(img1, black1);
		hoverEffect(img2, black2);
		hoverEffect(img3, black3);
		hoverEffect(img4, black4);
		hoverEffect(img5, black5);
		hoverEffect(img6, black6);
	} else {
		black1.style.opacity = "1";
		black2.style.opacity = "1";
		black3.style.opacity = "1";
		black4.style.opacity = "1";
		black5.style.opacity = "1";
		black6.style.opacity = "1";
	}
};
myFunction(x);
x.addEventListener("load", myFunction);

const toggleTheme = document.querySelector(".toggle-theme");
const toggleButton = document.querySelector(".toggle-button");
const navbar = document.querySelector("nav");
const body = document.querySelector("body");
const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const serviceContainer = document.querySelector(".service-container");

const buttonBlackServices = document.querySelectorAll(".button-black-services");
const servicePreviewImg = document.querySelectorAll(".service-preview-img");
const servicePreviewBottomH1 = document.querySelector(
	".service-preview-bottom h2"
);
const servicePreviewBottomP = document.querySelector(
	".service-preview-bottom p"
);
const servicePreviewContainer = document.querySelector(
	".service-preview-container"
);

buttonBlackServices.forEach((button) => {
	button.addEventListener("click", () => {
		const parent = button.parentElement.parentElement;
		servicePreviewContainer.style.visibility = "visible";
		const imgUrl = window
			.getComputedStyle(parent.children[0].children[0])
			.backgroundImage.split('"')[1];
		servicePreviewImg[0].style.background = `url(${imgUrl}) center/contain no-repeat`;
		servicePreviewBottomH1.innerText = parent.children[1].children[0].innerText;
		servicePreviewBottomP.innerText =
			parent.children[1].children[1].getAttribute("data-content");
		body.style.overflow = "hidden";
	});
});

const closeSvg = document.querySelector(".close-svg");

closeSvg.addEventListener("click", () => {
	servicePreviewContainer.style.visibility = "hidden";
	body.style.overflow = "auto";
});

const readMoreButton1 = document.querySelectorAll(".read-more-button1");
const readMoreButton2 = document.querySelectorAll(".read-more-button2");
const displayBlockPTag1 = document.querySelectorAll(".display-block-p-tag1");
const displayBlockPTag2 = document.querySelectorAll(".display-block-p-tag2");

const transitionJavaScript = (readMoreButton, displayBlockPTag) => {
	readMoreButton.forEach((element) => {
		element.addEventListener("click", () => {
			displayBlockPTag.forEach((e) => {
				e.classList.toggle("readMore");
			});
		});
	});
};
transitionJavaScript(readMoreButton1, displayBlockPTag1);
transitionJavaScript(readMoreButton2, displayBlockPTag2);











// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
	// toggler icon click event
	navToggler.addEventListener("click", togglerClick);
	// nav links click event
	navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
	navToggler.classList.toggle("toggler-open");
	navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
	if (navMenu.classList.contains("open")) {
		navToggler.click();
	}
}
