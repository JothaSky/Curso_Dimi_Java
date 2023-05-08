function tocaSom() {
    document.querySelector("#som_tecla_pom").play();
    
}
function tocaSom(idElementaudio) {
    document.querySelector(idElementaudio).play();
}
const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


//enquanto
while (contador < ListaDeTeclas.length) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
 console.log(idAudio);


    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    contador++;

    console.log(contador);
}
