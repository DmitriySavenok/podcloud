import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

function featuredShowsSlider() {
	const swiper = new Swiper('.featured-shows__slider', {
		modules: [Navigation],
		slidesPerView: 1,

		breakpoints: {
			920: {
				slidesPerView: 2,
				spaceBetween: 30
			},
		},

		navigation: {
		  nextEl: '.featured-shows__slide-btn-next',
		  prevEl: '.featured-shows__slide-btn-prev',
		}
	});
}

export default {
	featuredShowsSlider
}
