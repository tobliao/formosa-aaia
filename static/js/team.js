const wetlabmember = document.getElementsByClassName("wetlabmember");
const drylabmember = document.getElementsByClassName("drylabmember");
const hpmember = document.getElementsByClassName("hpmember");
const swmember = document.getElementsByClassName("swmember");
const justin = document.getElementsByClassName("justin");
const youshin = document.getElementsByClassName("youshin");
const timothy = document.getElementsByClassName("timothy");
const jenson = document.getElementsByClassName("jenson");

function wetlab_member(){
    console.log(wetlabmember, wetlabmember.length);
    // grey 
    for(var i=0; i<drylabmember.length; i++) {
        drylabmember[i].style["background-color"] = "grey";
    }
    for(var i=0; i<hpmember.length; i++) {
        hpmember[i].style["background-color"] = "grey";
    }
    for(var i=0; i<swmember.length; i++) {
        swmember[i].style["background-color"] = "grey";
    }
}


