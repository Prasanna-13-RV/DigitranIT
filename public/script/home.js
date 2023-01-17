const t1 = gsap.timeline({
	scrollTrigger: {
		trigger: '.d-effect',
		start: 'top',
		end: '100%',
		scrub: 'true',
		pin: true
	}
});

t1.to('.d-effect', { clipPath: 'circle(100% at 50% 40%)', duration: 1 });
t1.to('.d-effect .d', { rotate: '180deg', opacity: 0, scale: 0 }, '-=1');
