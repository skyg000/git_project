
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 5,
  slidesPerView: 4,
  centeredSlides: false,
  loop:true,
  speed:6000,
  autoplay: {
  delay:  0,
    disableOnInteraction: false,
  },
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
