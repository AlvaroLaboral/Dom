window.onload=function(){
    
    
    
    //Obtener los botones

    const botonEnviar=document.getElementById('enviar');

    //Asignar evento al botón enviar
    botonEnviar.addEventListener('click',mostrar);





}



function mostrar(){

    let campos=document.getElementsByName("menu");
    let seleccionado=false
    campos.forEach(function(v){

        if(v.checked){
            alert("Elegiste: " +v.value)
            seleccionado=true
        }
    

    });


       if(!seleccionado){
            alert("Nso elegiste ninguna opción")  
}


}