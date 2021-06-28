var compteurImage=0;
var totalImage=12;

function slider(x){
    x=1;
    var image=document.getElementById("img");
    compteurImage=compteurImage + x;

    image.src="images/ess"+compteurImage+".jpg"; 
    if(compteurImage>=totalImage){
        compteurImage=1;

    }
    if(compteurImage<1){
        compteurImage=totalImage;
    }



}
function write(){
    var v=document.getElementByClass(".img_mon").innerHtml("blq bla ablahaa ");
}

var menu_btn=document.getElementById("menu_img");
var content=document.getElementById("contenu");
var container_menu=document.getElementById("container_menu");
container_menu.style.left="-400px";
menu_btn.onclick = function(){
    if(container_menu.style.left=="-400px"){
        container_menu.style.left="0";
    }
    else{
        container_menu.style.left="-400px";
    }
}