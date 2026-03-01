window.onload = function () {


    //obtener el div destino    
    const destino = document.getElementById('destino');

    //obtener los botones
    const botonRojo = document.getElementById('rojo');
    const botonAzul = document.getElementById('azul');
    const botonVolver = document.getElementById('volver');

    //asignar evento al botón rojo

    botonRojo.addEventListener('click', function (){

        destino.style.backgroundColor = 'red';


    });

    //asignar evento al botón azul

    botonAzul.addEventListener('click', function (){

        destino.style.backgroundColor = 'blue';


    });


    //Dejar div sin color de relleno

    botonVolver.addEventListener('click', function (){

        destino.style.backgroundColor = 'transparent';

        //también valdría destino.style.backgroundColor = '';


    });

}