import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

function reviewsSlider() {
	const swiper = new Swiper('.reviews__slider', {
		modules: [Navigation],
		slidesPerView: 2.5,
		spaceBetween: 30,
		centeredSlides: true,
		crossFade: true,
		simulateTouch: false,

		navigation: {
		  nextEl: '.reviews__slide-btn-next',
		  prevEl: '.reviews__slide-btn-prev',
		}
	})
}

export default {
	reviewsSlider
}
