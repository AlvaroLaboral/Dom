window.onload=function(){


// Obtener los botones    
const botonCopiar= document.getElementById('copiar');

//Asignar evento al botón copiar

botonCopiar.addEventListener('click',fCopiar);


}


function fCopiar(){

    //contenido a copiar

    let textoParacopiar = document.querySelector(".texto").textContent;

    //elemento donde tengo que copiar el contenido

    let destino = document.querySelector("p");
    destino.textContent=textoParacopiar;

}