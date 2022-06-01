function catalogHeight() {
    var width = document.getElementsByClassName('imgKV');
    var w = document.getElementById('imgKV').offsetWidth;
    var h = (w * 0.84).toString() + "px";
    for(var i=0; i<width.length; i++){
        width[i].style.height = h;
    }
    setTimeout(catalogHeight, 1)
}
catalogHeight();
function partnersHeight() {
    var width = document.getElementsByClassName('Pimg');
    var w = document.getElementById('Pimg').offsetWidth;
    var h = (w * 0.5).toString() + "px";
    for(var i=0; i<width.length; i++){
        width[i].style.height = h;
    }
    setTimeout(partnersHeight, 1)
}
partnersHeight();