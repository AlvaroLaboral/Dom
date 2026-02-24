window.onload = function () {

    let btn = document.getElementById("boton");

    btn.addEventListener("click", mover);


};

function mover() {

    let elemento = document.getElementById("animar");
    let pos = 0;
    let id = setInterval(frame, 5);


    function frame() {
        if (pos == 350) {

            clearInterval(id);

        } else {


        }

        pos++;
        elemento.style.top = pos + 'px';
        elemento.style.left = pos + 'px';


    }



}