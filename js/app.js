var btleft = document.getElementById("btnleft")
var btright = document.getElementById("btnright")
var allslide = document.querySelectorAll(".slider-item")
var hazirkiSlide = 0;
btleft.onclick = function(){
    SliderAll(hazirkiSlide - 1)
}
btright.onclick = function(){
    SliderAll(hazirkiSlide + 1)
}

function SliderAll(say) {
    allslide[hazirkiSlide].className = "slider-item"
    hazirkiSlide =(say + allslide.length) % allslide.length
    allslide[hazirkiSlide].className = "slider-item active"
}

document.addEventListener("keyup", function(e) {
    if(e.keyCode==39){
        SliderAll(hazirkiSlide + 1)
    } else if (e.keyCode ==37){
        SliderAll(hazirkiSlide - 1)
    }
})


