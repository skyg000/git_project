
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 5,
  slidesPerView: 4,
  centeredSlides: false,
  loop:true,
  autoplay: {
  delay: 0,
    disableOnInteraction: false,
  },
  speed:6000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
                
                320: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                
                640: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                992:{
                    slidesPerView: 4,
                    spaceBetween: 10
                }
            }
});
