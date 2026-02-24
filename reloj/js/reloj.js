window.onload=function(){

//Llamamos a la funcion obtenerHora cada 500 milisegundos (medio segundo). 
// Esto es lo que permite que el reloj se actualice

let t=setInterval(obtenerHora,500);





}


function obtenerHora(){

    let fecha = new Date(); //creamos un objeto de tipo fecha

    let h=fecha.getHours();
    //Si la hora no tiene dos digitos, le añadiremos un cero delante
    if(h<10){

        h="0"+h;
    }

    //Extraemos los minutos de la variable donde hemos guardado la fecha

    let m=fecha.getMinutes();
    //Si los minutos no tienen dos digitos le añadiremos un cero delante

    if (m<10){

        m="0"+m;

    }


    let s=fecha.getSeconds();

    if(s<10){


        s="0"+s;
    }
    document.getElementById("reloj").innerHTML=h+":"+m+":"+s;


}


function obtenerHora(){
let fecha=new Date();

let h=fecha.getHours();
let m=fecha.getMinutes();
let s=fecha.getSeconds();

//Añadir 0 delante si es necesario

if (h<10) h = `0${h}`;
if (m<10) m = `0${m}`;
if (s<10) s = `0${s}`;

document.getElementById("reloj").innerHTML = `${h}:${m}:${s}`;

}