function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeteclas = document.querySelectorAll('.tecla');


let contador = 0;

while (contador < 9 ) {
    listaDeteclas[contador].onclick = tocaSom;

    contador = contador + 1;

    console.log(contador);
}
