function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento  && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido')
       // alert('Elemento não encontrado')
    } 
        
}
    function tocaSom(idElementaudio) {
        const elemento = document.querySelector(idElementaudio);
        elemento.currentTime = 0;
        elemento.play();
    
        
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
    
        tecla.onkeydown = function (evento) {
            console.log(evento.code == 'Space');

            if (evento.code === "Space" || evento.code === "Enter") {
                tecla.classList.add("ativa");
            }
        }
        

        tecla.onkeyup = function () {
            tecla.classList.remove("ativa");
        

        }

    }






