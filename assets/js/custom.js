
const bannerSwiper = new Swiper(".banner-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const bannerFullWidthSwiper = new Swiper(".banner-fullwidth-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const partnerSwiper = new Swiper(".partner_swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0:{
        slidesPerView: 2,
        spaceBetween: 160,
      },
      520: {
        slidesPerView: 3,
        spaceBetween: 120,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 90,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 140,
      },
    },
  });
  
  var swiper = new Swiper(".main-swipper-toggler", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      0:{
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });
  var swiper2 = new Swiper(".main-swipper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });