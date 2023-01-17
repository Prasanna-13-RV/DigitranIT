const bottomNav = document.querySelector('.navbar');
const body = document.querySelector('body');

if (window.innerWidth >= 764) {
	lastScroll = 0;
	window.addEventListener('scroll', () => {
		let currentScroll = window.scrollY;
		if (currentScroll > lastScroll) {
			bottomNav.style.top = `-100%`;
		} else {
			bottomNav.style.top = `0`;
		}
		lastScroll = currentScroll;
	});
} else {
	bottomNav.style.height = window.innerHeight + 'px';
}

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
// 	scrollFunction();
// };

// function scrollFunction() {
// 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// 		bottomNav.style.color = '#fff';
// 	} else {
// 		bottomNav.style.color = '#000';
// 	}
// }
