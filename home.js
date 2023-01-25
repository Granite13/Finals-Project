var navigationBar = document.getElementById("navbar");
var menuSelection = document.getElementById("menuselect");

window.onscroll = function(){
    if(window.pageYOffset >= menuSelection.offsetTop){
        navigationBar.classList.add("sticky");
    }
    else{
        navigationBar.classList.remove("sticky");
    }
}