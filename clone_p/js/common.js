
$('body').prepend('<header></header>');
$('body').append('<footer></footer>');
$("header").load('./inc.html .head ', function(){
    menu();
});

$("footer").load('./inc.html .foot', function(){
    aab();
});

function menu (){
    const element = document.querySelectorAll('.menu a');
    let pageNum = sessionStorage.pageNum;
        if(pageNum)element[pageNum].style.color = '#fde700'
        element.forEach(function(m,k){
            m.onclick = function(e){
            sessionStorage.pageNum = k;
            }
        })

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
}
function aab(){
    $(".back").on('click',function(){
        scrollTo({"top":"0",behavior:"smooth"})
    })
    $(".back1").on('click',function(){
        scrollTo({"top":"0",behavior:"smooth"})
    })
}