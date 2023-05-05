const textoNormal = document.querySelector("#ladoIzq");
const textoClave = document.querySelector("#ladoDer");

var botonEncriptar = document.querySelector("#btn1");
var botonDesencriptar = document.querySelector("#btn2");
var botonCopiar = document.querySelector("#copiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

botonCopiar.onclick = copiar;
botonLimpiar.onclick = limpiar;

function encriptar(){
   var texto = textoNormal.value;
   var textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    document.getElementById("contenedorImg").style.visibility = "hidden";
    document.getElementById("letras").style.visibility = "hidden";
    // document.getElementById("p-izq").style.visibility = "hidden";
    document.getElementById("copiar").style.visibility = "visible";

    textoClave.value = textoEncriptado;

    document.getElementById("ladoIzq").value = '';
}

function desencriptar(){
    let textoEncriptado = textoNormal.value;
    let texto = textoEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    document.getElementById("contenedorImg").style.visibility = "hidden";
    document.getElementById("letras").style.visibility = "hidden";
    // document.getElementById("p-izq").style.visibility = "hidden";
    document.getElementById("copiar").style.visibility = "visible";

    textoClave.value = texto;

    document.getElementById("ladoIzq").value = '';
}

function copiar() {
    var textoEncriptado = textoClave.value;
    navigator.clipboard.writeText(textoEncriptado);
    document.getElementById("ladoDer").value = '';
    
  }

  


