const swiper = new Swiper('[data-name="swiper__lanidng"]', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  parallax: true,
  grabCursor: true,
  speed: 1000,
  autoplay: true,
  mousewheelControl: 1,
  pagination: {
    el: ".landing-image-counter",
    type: "fraction",
  },
});

// swiper.mousewheel.enable();