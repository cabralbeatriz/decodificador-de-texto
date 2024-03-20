const campoInicial = document.getElementById("text");
const result = document.getElementById("campo");


function criptografar() {
    const frase = encriptar(campoInicial.value);
    result.value = frase;
    campoInicial.value = "";
}

function encriptar(stringEncriptada) {

   let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
   stringEncriptada = stringEncriptada.toLowerCase();

   for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1]);
    }
   }

return stringEncriptada;
}

function descriptografar() {
    const frase = desencriptar(campoInicial.value);
    result.value = frase;
    campoInicial.value = "";

}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
return stringDesencriptada;
} 
function copiar() {
    const copiado = document.getElementById("campo");
    copiado.addEventListener("click",()=> {
    copiado.select();
    copiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copiado.value);
    })
    alert('Copiado!');
    
} 






