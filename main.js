function tocaSom() {
    document.querySelector("#som_tecla_pom").play();
    
}
function tocaSom(idElementaudio) {
    
    document.querySelector(idElementaudio).play();
}
const ListaDeTeclas = document.querySelectorAll('.tecla');




//para
for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string
    // console.log(idAudio);


    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    

   // console.log(contador);
}
