function ocultar(){
    document.getElementById("oculto").style.display= "none";
    document.getElementById("text-cambio").style.display="";
    document.getElementById("copiar").style.display="";
}
function encriptarClick(){
    let text =  document.getElementById("textoaencriptar").value.toLowerCase();
    var textocif = text.replace(/e/igm,"enter");
    var textocif = textocif.replace(/o/igm,"ober");
    var textocif = textocif.replace(/i/igm,"imes");
    var textocif = textocif.replace(/a/igm,"ai");
    var textocif = textocif.replace(/u/igm,"ufat");
    document.getElementById("text-cambio").innerHTML= textocif;
    document.getElementById("oculto").style.display= "none";
    document.getElementById("text-cambio").style.display="";
    document.getElementById("copiar").style.display="";
}


function desencriptarClick(){
    let text =  document.getElementById("textoaencriptar").value.toLowerCase();
    var textoDes = text.replace(/enter/igm,"e");
    var textoDes = textoDes.replace(/ober/igm,"o");
    var textoDes = textoDes.replace(/imes/igm,"i");
    var textoDes = textoDes.replace(/ai/igm,"a");
    var textoDes = textoDes.replace(/ufat/igm,"u");
    document.getElementById("text-cambio").innerHTML=textoDes;
    document.getElementById("oculto").style.display= "none";
    document.getElementById("text-cambio").style.display="";
    document.getElementById("copiar").style.display="";

     
    
}

function copy(){
var copiado = document.querySelector("#text-cambio");
copiado.select();
document.execCommand("copy", false,);
alert("copiado");


}