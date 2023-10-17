alert("Olá, seja bem-vindo!");

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivado = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivado) {

    imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/sun.png");

    } else{
    imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/moon.png");
    }   
});
