function initSliders() {
    if (document.querySelector(".hero-swiper")) {
      new Swiper('.hero-swiper', {
        loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 1500,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: false,
          prevEl: false,
        },
      });
    };

    if (document.querySelector(".projects-swiper")) {
      new Swiper(".projects-swiper", {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoHeight: true,
        speed: 800,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: ".projects .swiper-button-prev",
          nextEl: ".projects .swiper-button-next",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
            autoHeight: true,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 15,
            autoHeight: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1110: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
    };
    
    if (document.querySelector(".reviews-swiper")) {
      new Swiper(".reviews-swiper", {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1500,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
  
        navigation: {
          prevEl: ".reviews-swiper .swiper-button-prev",
          nextEl: ".reviews-swiper .swiper-button-next",
        },
      });
    }
  
  }
  window.addEventListener("load", function (e) {
    initSliders();
  });
  