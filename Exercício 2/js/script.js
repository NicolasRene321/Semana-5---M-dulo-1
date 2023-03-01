var titulo = document.querySelector('#titulo');
var nota = document.querySelector('#nota');
var duracaoMin = document.querySelector('#duracaoMin');
var botao = document.querySelector('#botao');
var filme = {};

botao.addEventListener('click', cadastrarFilme);

function cadastrarFilme() {
    if(titulo.value === filme.titulo){
        verificarTitulo();
    }else{
        filme.titulo = titulo.value ;
        filme.nota = parseFloat(nota.value);
        filme.duracao = parseFloat(duracaoMin.value);
        filme.assistido = false;
        filme.favoritado = false;
        console.log(filme);
        window.alert("Filme adicionado com sucesso!");
    }
}

function verificarTitulo() {
    window.alert("Já possui um filme com esse mesmo título!");
}