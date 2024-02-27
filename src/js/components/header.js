import SimpleBar from 'simplebar'

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
	headerBackgroudScroll
}
