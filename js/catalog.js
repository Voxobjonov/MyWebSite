function maxwidth() {
    if(screen.width < 1359){
        var width = document.getElementById('imgSection').offsetWidth;
        var w = width.toString() + "px";
        document.getElementById('imgSmall').style.width = w;
        setTimeout(maxwidth, 1)
    }
}
maxwidth();
// function catalogHeight() {
//     var width = document.getElementsByClassName('imgKV');
//     var w = document.getElementById('imgKV').offsetWidth;
//     var h = (w * 0.84).toString() + "px";
//     for(var i=0; i<width.length; i++){
//         width[i].style.height = h;
//     }
//     setTimeout(catalogHeight, 1)
// }
// catalogHeight();