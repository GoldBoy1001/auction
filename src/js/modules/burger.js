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