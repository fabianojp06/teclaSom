





//criação da função que executará o som pom
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();// faz o áudio tocar

}//console.log(tocaSomPom) //apenas para logar o trecho


//abaixo capturei o botão ".tecla_pom" e após ao clicar, executará a função chamada
//document.querySelector('.tecla_pom').onclick = tocaSomPom


//até aqui foi o conteúdo da aula última aula



const listaDeTeclas = document.querySelectorAll('.tecla');//referencia todos os botões

let contador = 0; //contador de teclas -array, nro de posições

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);

    const idAudio = `#som_${instrumento}`;

    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador)
}





































/*======================================================================
function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}//console.log(tocaSom) //apenas para logar o trecho

const listaDeTeclas = document.querySelectorAll('.tecla'); //criada referência para armazenar todas as teclas

listaDeTeclas[0].onclick = tocaSomPom; //utilizando índice para acessar cada item individualmente

for (let contador = 0; contador < listaDeTeclas.length; contador ++) { //contador sendo comparado com o tamanho da lista de teclas feito com "for"
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];//ver aula 04.07 que fala sobre entrar na lista de classe
        //console.log(instrumento);

    const idAudio = `#som_${instrumento}`; //template string
    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);   

    }
//console.log(contador);
}
/*====================================================

/*let contador = 0;
while (contador < listaDeTeclas.length) { //contador sendo comparado com o tamanho da lista de teclas
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];//ver aula 04.07 que fala sobre entrar na lista de classe
        //console.log(instrumento);

    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);   

    }

    contador = contador + 1;

    //console.log(contador);
}*/