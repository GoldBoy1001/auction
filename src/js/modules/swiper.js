new Swiper('.main-slider', {
	// Optional parameters
	//direction: 'vertical',
	loop: true,
	speed: 800,
	//slidesPerView: 3,
	//spaceBetween: 50,
	autoHeight: true,
	//pagination: {
	//	el: '.swiper-pagination',
	//},
	// Navigation arrows
	navigation: {
		nextEl: '.control-main-slider__arrow_right',
		prevEl: '.control-main-slider__arrow_left',
	},


	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

new Swiper('.lots__slider', {
	// Optional parameters
	//direction: 'vertical',
	//observer: true,
	//observerParents: true,
	spaceBetween: 90,
	//centeredSlides: true,
	slidesPerView: 3,
	loop: true,
	speed: 800,
	autoHeight: true,
	//pagination: {
	//	el: '.swiper-pagination',
	//},
	// Navigation arrows
	navigation: {
		nextEl: '.control-slider-lots__arrow_right',
		prevEl: '.control-slider-lots__arrow_left',
	},

	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,
		},
		570: {
			slidesPerView: 2,
			spaceBetween: 20,
			autoHeight: true,
		},
		// when window width is >= 480px
		769: {
			slidesPerView: 3,
			spaceBetween: 38,
			autoHeight: true,
		},
		// when window width is >= 640px
		993: {
			//slidesPerView: 3,
			spaceBetween: 90
		}
	}
});


new Swiper('.quotes__slider', {
	// Optional parameters
	//direction: 'vertical',
	loop: true,
	speed: 800,
	//slidesPerView: 3,
	spaceBetween: 50,
	//autoHeight: true,
	effect: "fade",
	fadeEffect: {
		crossFade: true
	},
	//pagination: {
	//	el: '.swiper-pagination',
	//},
	// Navigation arrows
	navigation: {
		nextEl: '.control-quotes__img',
		prevEl: '.control-quotes__img',
	},
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});