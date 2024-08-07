onload = () => {
    //Tela_inicial();
    Carregar_jogo(70);
}

function Tela_inicial() {
    document.querySelector(".tela_inicial").innerHTML =
    `<h1>Jogo da forca</h1> <h2>Iniciar</h2> <button id="btn_iniciar"><i class="fa-solid fa-play"></i></button>`;
}

function Carregar_jogo(tecla_inativa){
  
    teclado = document.querySelector(".teclado");
    let classe="";

  for(let i=65;i<91;i++){
    classe = i!=tecla_inativa?"tecla":"tecla_inativa";
    teclado.innerHTML +=`<div id="bt-${i}" class="${classe}">${String.fromCharCode(i)}</div> `; 
  }

}

function Gerar_palavras(){
    //gerar palavras com letras ocultas com a mesma cor do background
}


