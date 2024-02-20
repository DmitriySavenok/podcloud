
function headerBackgroudScroll() {
	const header = document.querySelector('.header');
	header.classList.remove('header--scrolling');
	if(window.scrollY != 0) {
		header.classList.add('header--scrolling');
	} else {
		header.classList.remove('header--scrolling');
	}
	window.addEventListener('scroll', function () {
		if (window.scrollY >= 54) {
			header.classList.add('header--scrolling');
		} else {
			header.classList.remove('header--scrolling');
		}
	});
}

export default {
	headerBackgroudScroll
}
