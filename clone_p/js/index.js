
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 5,
  slidesPerView: 4,
  centeredSlides: false,
  loop:true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
