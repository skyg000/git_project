const mBar1 = document.querySelector('.bar'),
        mPopup1 = document.querySelector('.pop'),
        mBar2 = document.querySelector('.bar1');
        mBar1.onclick = function(){
            if (mPopup1.style.display == "flex"){
            mPopup1.style.display= "none"
            } else {
            mPopup1.style.display = "flex";
            $(".fa-x").css("color","#fff") 
            mBar2.style = "position:absolute; right:70px; top:30px" 
            }                
        }
            mBar2.onclick = function(){
            if (mPopup1.style.display == "flex"){
            mPopup1.style.display= "none"
            }
        }
