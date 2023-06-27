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

/* const t_Concert = document.querySelectorAll('.concert1 li'),
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
        } */