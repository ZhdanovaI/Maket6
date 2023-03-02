import Swiper from "./swiper-bundle.js";

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    768: {
      spaceBetween: 24,
      allowSlideNext: false,
      allowSlidePrev: false
    },
    1120: {
      spaceBetween: 32,
      allowSlideNext: false,
      allowSlidePrev: false
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});