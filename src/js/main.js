import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';

import header from './components/header';
import audioPlayer from './components/UI/audioPlayer';
import categoriesSlider from './components/categoriesSlider';
import featuredShowsSlider from './components/featuredShowsSlider';
import reviews from './components/reviews';

import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.headerBackgroudScroll();
header.headerSearchInput();
header.headerToggleMenu();
audioPlayer.audioPlayer();
categoriesSlider.categoriesSlider();
featuredShowsSlider.featuredShowsSlider();
featuredShowsSlider.featuredShowsSlider();
reviews.reviewsSlider();

lazyLoading.init();
