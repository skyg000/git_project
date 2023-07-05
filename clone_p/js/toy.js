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

        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 5,
            slidesPerView: 4,
            centeredSlides: false,
            loop:true,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        });