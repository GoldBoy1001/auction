
import * as webpFn from "./modules/fn.js";
webpFn.isWebp();



let userIcon = document.querySelector('.user-header__icon');
let userMenu = document.querySelector('.user-header__menu');
const iconMenu = document.querySelector('.icon__menu');
const menuBody = document.querySelector('.menu__body');

// Выподающее меню
userIcon.addEventListener('click', (e) => {
	if (e.target) {
		menuBody.classList.remove('_active');
		iconMenu.classList.remove('_active');
	}
	userMenu.classList.toggle('_active');
})

// бургер меню
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		//document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

// Закрытие выподающего меню при клике на другой обьект
document.documentElement.addEventListener('click', (e) => {
	if (!e.target.closest('.user-header')) {
		userMenu.classList.remove('_active');
	}
})

//Объявляем переменные
const parent_original = document.querySelector('.header__actions');
const meniList = document.querySelector('.menu__list');
const region = document.querySelector('.actions-header__region');

//Слушаем изменение размера экрана
window.addEventListener('resize', move);

//Функция перемещения объекта
function move() {
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 767) {
		if (!region.classList.contains('done')) {
			meniList.insertBefore(region, meniList.append(region));
			region.classList.add('done');
		}
	} else {
		if (region.classList.contains('done')) {
			parent_original.prepend(region);
			region.classList.remove('done');
		}
	}
}

move();

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
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth'
			});
			e.preventDefault();
		}
	}
}
//function ibg() {
//
//	let ibg = document.querySelectorAll(".ibg");
//	for (var i = 0; i < ibg.length; i++) {
//		if (ibg[i].querySelector('img')) {
//			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
//		}
//	}
//}
//
//ibg();
// Слайдер
//const arrowLeft = document.querySelector('.control-main-slider__arrow_left');
//const arrowRight = document.querySelector('.control-main-slider__arrow_right');
//
//arrowLeft.addEventListener('click', previousSlide);
//arrowRight.addEventListener('click', nextSlide);


//<==============ДИНАМИЧЕСКИЙ АДАПТИВ==================
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"


//Adaptive functions
let move_array = [];
if ($('*[data-move]')) {
	$.each($('*[data-move]'), function (index, val) {
		if ($(this).data('move') != '' && $(this).data('move') != null) {
			$(this).attr('data-move-index', index);
			move_array[index] = {
				'parent': $(this).parent(),
				"index": $(this).index()
			};
		}
	});
}
function dynamic_adaptive() {
	let w = $(window).outerWidth();
	$.each($('*[data-move]'), function (index, val) {
		if ($(this).data('move') != '' && $(this).data('move') != null) {
			let dat_array = $(this).data('move').split(',');
			let dat_parent = $('.' + dat_array[0]);
			let dat_index = dat_array[1];
			let dat_bp = dat_array[2];
			if (w < dat_bp) {
				if (!$(this).hasClass('js-move_done_' + dat_bp)) {
					if (dat_index > 0) {
						$(this).insertAfter(dat_parent.find('*').eq(dat_index - 1));
					} else {
						$(this).prependTo(dat_parent);
					}
					$(this).addClass('js-move_done_' + dat_bp);
				}
			} else {
				if ($(this).hasClass('js-move_done_' + dat_bp)) {
					dynamic_adaptive_back($(this));
					$(this).removeClass('js-move_done_' + dat_bp);
				}
			}
		}
	});
}
function dynamic_adaptive_back(el) {
	let index_original = el.data('move-index');
	let move_place = move_array[index_original];
	let parent_place = move_place['parent'];
	let index_place = move_place['index'];
	if (index_place > 0) {
		el.insertAfter(parent_place.find('*').eq(index_place - 1));
	} else {
		el.prependTo(parent_place);
	}
}
$(window).resize(function (event) {
	dynamic_adaptive();
});
dynamic_adaptive();

//console.log(move_array);

/*
function dynamic_adaptive_back_all(){
	$.each($('*[data-move]'), function(index, val) {
			let index_original=$(this).data('move-index');
			let move_place=move_array[index_original];
			let parent_place=move_place['parent'];
			let index_place=move_place['index'];
		if(index_place>0){
			$(this).insertAfter(parent_place.find('*').eq(index_place-1));
		}else{
			$(this).prependTo(parent_place);
		}
	});
}
*/
/**
 * @typedef {Object} dNode
 * @property {HTMLElement} parent
 * @property {HTMLElement} element
 * @property {HTMLElement} to
 * @property {string} breakpoint
 * @property {string} order
 * @property {number} index
 */

/**
 * @typedef {Object} dMediaQuery
 * @property {string} query
 * @property {number} breakpoint
 */

/**
 * @param {'min' | 'max'} type
 */
export function useDynamicAdapt(type = 'max') {
	const className = '_dynamic_adapt_'
	const attrName = 'data-da'

	/** @type {dNode[]} */
	const dNodes = getDNodes()

	/** @type {dMediaQuery[]} */
	const dMediaQueries = getDMediaQueries(dNodes)

	dMediaQueries.forEach((dMediaQuery) => {
		const matchMedia = window.matchMedia(dMediaQuery.query)
		// массив объектов с подходящим брейкпоинтом
		const filteredDNodes = dNodes.filter(({ breakpoint }) => breakpoint === dMediaQuery.breakpoint)
		const mediaHandler = getMediaHandler(matchMedia, filteredDNodes)
		matchMedia.addEventListener('change', mediaHandler)

		mediaHandler()
	})

	function getDNodes() {
		const result = []
		const elements = [...document.querySelectorAll(`[${attrName}]`)]

		elements.forEach((element) => {
			const attr = element.getAttribute(attrName)
			const [toSelector, breakpoint, order] = attr.split(',').map((val) => val.trim())

			const to = document.querySelector(toSelector)

			if (to) {
				result.push({
					parent: element.parentElement,
					element,
					to,
					breakpoint: breakpoint ?? '767',
					order: order !== undefined ? (isNumber(order) ? Number(order) : order) : 'last',
					index: -1,
				})
			}
		})

		return sortDNodes(result)
	}

	/**
	 * @param {dNode} items
	 * @returns {dMediaQuery[]}
	 */
	function getDMediaQueries(items) {
		const uniqItems = [...new Set(items.map(({ breakpoint }) => `(${type}-width: ${breakpoint}px),${breakpoint}`))]

		return uniqItems.map((item) => {
			const [query, breakpoint] = item.split(',')

			return { query, breakpoint }
		})
	}

	/**
	 * @param {MediaQueryList} matchMedia
	 * @param {dNodes} items
	 */
	function getMediaHandler(matchMedia, items) {
		return function mediaHandler() {
			if (matchMedia.matches) {
				items.forEach((item) => {
					moveTo(item)
				})

				items.reverse()
			} else {
				items.forEach((item) => {
					if (item.element.classList.contains(className)) {
						moveBack(item)
					}
				})

				items.reverse()
			}
		}
	}

	/**
	 * @param {dNode} dNode
	 */
	function moveTo(dNode) {
		const { to, element, order } = dNode
		dNode.index = getIndexInParent(dNode.element, dNode.element.parentElement)
		element.classList.add(className)

		if (order === 'last' || order >= to.children.length) {
			to.append(element)

			return
		}

		if (order === 'first') {
			to.prepend(element)

			return
		}

		to.children[order].before(element)
	}

	/**
	 * @param {dNode} dNode
	 */
	function moveBack(dNode) {
		const { parent, element, index } = dNode
		element.classList.remove(className)

		if (index >= 0 && parent.children[index]) {
			parent.children[index].before(element)
		} else {
			parent.append(element)
		}
	}

	/**
	 * @param {HTMLElement} element
	 * @param {HTMLElement} parent
	 */
	function getIndexInParent(element, parent) {
		return [...parent.children].indexOf(element)
	}

	/**
	 * Функция сортировки массива по breakpoint и order
	 * по возрастанию для type = min
	 * по убыванию для type = max
	 *
	 * @param {dNode[]} items
	 */
	function sortDNodes(items) {
		const isMin = type === 'min' ? 1 : 0

		return [...items].sort((a, b) => {
			if (a.breakpoint === b.breakpoint) {
				if (a.order === b.order) {
					return 0
				}

				if (a.order === 'first' || b.order === 'last') {
					return -1 * isMin
				}

				if (a.order === 'last' || b.order === 'first') {
					return 1 * isMin
				}

				return 0
			}

			return (a.breakpoint - b.breakpoint) * isMin
		})
	}

	function isNumber(value) {
		return !isNaN(value)
	}
}