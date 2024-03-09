import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

function categoriesSlider() {
	const screenWidth = document.documentElement.clientWidth;
	function slideElemAddClass() {
		document.querySelector('.categories__list').classList.toggle('swiper-wrapper')
		let elements = document.querySelectorAll('.categories__list li');
		for (let elem of elements) {
			elem.classList.toggle('swiper-slide')
		}
	}
	slideElemAddClass()
	if(screenWidth > 920) {
		slideElemAddClass()
		console.log('размер экрана больше 920 px')
		const swiper = new Swiper('.categories-slide', {
		modules: [Autoplay],
			slidesPerView: 5,
			freeMode: true,
			loop: true,
			autoplay: {
				delay: 100,
				pauseOnMouseEnter: true
			},
			grabCursor: true,
			speed: 5000,
			spaceBetween: 120
		});
	}
}

export default {
	categoriesSlider
}
