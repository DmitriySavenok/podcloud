
function headerBackgroudScroll() {
	const header = document.querySelector('.header'); // Здесь класс вашей шапки
	window.addEventListener('scroll', function() {
	  if (window.scrollY >= 54) {
		header.classList.add('header--scrolling'); // Добавить класс, который будет менять стили
	  } else {
		header.classList.remove('header--scrolling'); // Убрать
	  }
	});
	console.log('headerBackgroudScroll скрипт')
}

export default {
	headerBackgroudScroll
}

console.log('header файл')
