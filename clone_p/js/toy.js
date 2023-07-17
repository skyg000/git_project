const t_Video = document.querySelectorAll('.t-vid li'),
        t_Popup = document.querySelector('.v-popup'),
        aSrc=document.querySelectorAll('.t-vid li iframe'),
        popupVido = document.querySelector('.v-popup iframe'),
        popupText = document.querySelector('.v-popup p' );
let text = document.querySelectorAll('.vid p');
        t_Video.forEach(function(v,k){
            v.onclick = function(){
                let aSrc1 = aSrc[k].src;
                popupVido.src = aSrc1;
                let text1 = text[k].innerText;
                popupText.innerText = text1;
                t_Popup.style = 'display:flex';
            }
        })
        t_Popup.onclick = function(){
            t_Popup.style = 'display:none';
        }
/* ========================================================================= */
const conCert = document.querySelectorAll('.concert li'),
        c_Pop = document.querySelector('.c-popup'),
        imgSrc = document.querySelectorAll('.concert li img'),
        popImg = document.querySelector('.c-popup img'),
        popText = document.querySelector('.c-popup p'),
        popText1 = document.querySelector('.c-popup h5');
let text2 = document.querySelectorAll('.concert1 p'),
    text4 = document.querySelectorAll('.concert1 h5');

        conCert.forEach(function(el,k){
            el.onclick = function(){
                let imgSrc1=imgSrc[k].src;
                popImg.src = imgSrc1;
                let text5 = text4[k].innerText;
                popText1.innerText = text5;
                let text3 = text2[k].innerText;
                popText.innerText = text3;
                c_Pop.style='display:flex';
            } 
        })
        c_Pop.onclick = function(){
            c_Pop.style = 'display:none';            
        }
/* ======================================================================== */
const conTent = document.querySelectorAll('.content .swiper-slide'),
        conPop = document.querySelector('.con-popup'),
        imgSrc2 = document.querySelectorAll('.content .swiper-slide img'),
        popImg1 = document.querySelector('.con-popup img'),
        popTxt = document.querySelector('.con-popup p');
let txt = document.querySelectorAll('.swiper1 p');

        conTent.forEach(function(ele,k){
            ele.onclick =function(){
                let imgSrc3 = imgSrc2[k].src;
                popImg1.src = imgSrc3;
                let txt1 = txt[k].innerText;
                popTxt.innerText = txt1;
                conPop.style = 'display:flex'
            }
        })
        conPop.onclick = function(){
            conPop.style = 'display:none';
        }
        
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

        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 4,
            slidesPerView: 4,
            autoHeight : true,
            centeredSlides: false,
            loop:true,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                // 화면의 넓이가 320px 이상일 때
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                // 화면의 넓이가 640px 이상일 때
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                991:{
                    slidesPerView: 4,
                    spaceBetween: 10
                }
            }
        });

        var swiper1 = new Swiper(".mySwiper1", {
            spaceBetween: 4,
            slidesPerView: 4,
            autoHeight : true,
            centeredSlides: false,
            loop:true,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                // 화면의 넓이가 320px 이상일 때
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                // 화면의 넓이가 640px 이상일 때
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                991:{
                    slidesPerView: 4,
                    spaceBetween: 10
                }
            }
        });

        $(".back").on('click',function(){
            scrollTo({"top":"0",behavior:"smooth"})
        })
        $(".back1").on('click',function(){
            scrollTo({"top":"0",behavior:"smooth"})
        })