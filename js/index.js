// document.write('<a href="' + document.referrer + '">Go Back</a>');
function headerHeight() {
    var h = document.getElementById('HH').offsetHeight;
    var w = h.toString() + "px";
    document.getElementById('HB').style.height = w;
    setTimeout(headerHeight, 1)
}
headerHeight();


function chiqarish(){
    document.getElementById("menu").classList.add("menuchiqarish");
    document.getElementById("body").classList.add("openMenu");
    document.getElementById("open").classList.add("opacity");
    document.getElementById("mask").classList.add("dblock");
}
function kiritish(){
    document.getElementById("menu").classList.remove("menuchiqarish");
    document.getElementById("body").classList.remove("openMenu");
    document.getElementById("open").classList.remove("opacity");
    document.getElementById("mask").classList.remove("dblock");
}
function dropdown(){
    if(document.getElementById("dropdown").style.display != "flex"){
        document.getElementById("dropdown").style.display = "flex";
        document.getElementById("dropdownSvg").style.transform = "rotate(180deg)";
    }
    else{
        document.getElementById("dropdown").style.display = "none";
        document.getElementById("dropdownSvg").style.transform = "rotate(0)";
    }
}
function transform(a){
    var smallImg = document.getElementById("smimg"+a).src;
    var bigImg = document.getElementById("bigimg").src;
    document.getElementById("smimg"+a).src = bigImg;
    document.getElementById("bigimg").src = smallImg;
}