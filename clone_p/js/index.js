const element = document.querySelector('.menu a');
element.onclick = function() {
  element.style = 'color:#fde700'
};

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 5,
  slidesPerView: 4,
  centeredSlides: false,
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const mBar = document.querySelector('.bar'),
        mPopup = document.querySelector('.pop'),
      mBar1 = document.querySelector('.bar1');
        mBar.onclick = function(){
          if (mPopup.style.display == "flex"){
            mPopup.style.display= "none"
          } else {
            mPopup.style.display = "flex";
            $(".fa-x").css("color","#fff") 
            mBar1.style="position:absolute; right:30px; top:30px"
            
          }                
        }
        mBar1.onclick = function(){
          if (mPopup.style.display == "flex"){
            mPopup.style.display= "none"
          }
        }