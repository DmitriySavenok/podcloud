import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

function categoriesSlider() {
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

export default {
	categoriesSlider
}
