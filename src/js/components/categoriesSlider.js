import Swiper from 'swiper';

function categoriseSlider() {
	const swiper = new Swiper('.swiper', {
		direction: 'horizontal',
		loop: true
	});
	console.log('скрипт запустился')
}

export default {
	categoriseSlider
}
