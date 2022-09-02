var swiper = new Swiper(".artistSwiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
