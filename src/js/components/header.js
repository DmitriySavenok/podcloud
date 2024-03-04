import SimpleBar from 'simplebar'

function headerToggleMenu() {
	const header = document.querySelector('.header');
	const menuBtn = document.querySelector('#header__menu-btn')
	menuBtn.addEventListener('click', function() {
		header.classList.toggle('header--menu-opened')
		menuBtn.classList.toggle('header__menu-btn--close')
	})
}

function headerSearchInput() {
	const searchBtn = document.querySelector('.header__search-btn')
	const closeBtn = document.querySelector('.header__close-btn')
	const search = document.querySelector('.search')
	const searchInput = document.querySelector('.search__input')
	searchBtn.addEventListener('click', function() {
		console.log('click')
		search.classList.add('search__input-visible')
		searchInput.focus();
	})

	closeBtn.addEventListener('click', function() {
		console.log('click')
		search.classList.remove('search__input-visible')
	})
}

function headerBackgroudScroll() {
	const header = document.querySelector('.header');
	const pageContent = document.querySelector('main');

	const simpleBar = new SimpleBar(document.getElementById('site'));
	simpleBar.getScrollElement().addEventListener('scroll', function() {
		let rect = pageContent.getBoundingClientRect();

		if(rect.top < -54) {
			header.classList.add('header--scrolling')
		} else {
			header.classList.remove('header--scrolling')
		}
	});
}

export default {
	headerBackgroudScroll,
	headerSearchInput,
	headerToggleMenu
}
