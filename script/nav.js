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
