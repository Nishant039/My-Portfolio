var nm=document.querySelector("strong")
var univ=document.querySelector("em")
var text=document.getElementById("change")
nm.style.color="rgb(224, 122, 95)"
function switchcolor()
{
    if(nm.style.color=="rgb(224, 122, 95)"){
        nm.style.color="#ffffff";
        univ.style.color="#ffffff";
        text.style.color="#e07a5f";
    }
    else{
        nm.style.color="#e07a5f";
        univ.style.color="#e07a5f";
        text.style.color="#ffffff";
        
    }
}
var size=0;
function animate(){
    if(size==0){
        nm.style.fontSize="1em";
        size=1;
    }
    else{
       nm.style.fontSize="1.4em";
        size=0;
    }
    
}
setInterval("animate()",3000)
setInterval("switchcolor()",3000)