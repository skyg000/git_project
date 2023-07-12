const element = document.querySelectorAll('.menu a');
let pageNum = localStorage.pageNum;
  element[pageNum].style.color = 'yellow'
  element.forEach(function(m,k){
    m.onclick = function(e){
      localStorage.pageNum = k;
    }
  })


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