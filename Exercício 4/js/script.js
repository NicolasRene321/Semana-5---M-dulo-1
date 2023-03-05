var titulo = document.querySelector('#titulo');
var nota = document.querySelector('#nota');
var duracaoMin = document.querySelector('#duracaoMin');
var botao = document.querySelector('#botao');
var campoBusca = document.querySelector(".buscar");
var botao1 = document.querySelector('#botao1');
var busca = document.querySelector('#busca');
var filmes = [];

campoBusca.style.marginTop = "60px"

botao.addEventListener('click', cadastrarFilme);

function cadastrarFilme() {
    if(titulo.value === filmes[0]){
        verificarTitulo();
    }else{
        filmes.push(titulo.value);
        filmes.push(parseFloat(nota.value));
        filmes.push(parseFloat(duracaoMin.value));
        filmes.push("Assistido:", false);
        filmes.push('Favoritado:', false);
        console.log(filmes);
        window.alert("Filme adicionado com sucesso!");
        listarFilme();
    }
}

function verificarTitulo() {
    window.alert("Já possui um filme com esse mesmo título!");
}



function listarFilme() {
    var lista = document.getElementsByTagName('article')[0];
    var card = document.createElement('div');
    var imagem = document.createElement('img');
    var titulo1 = document.createElement('h3');
    var nota1 = document.createElement('h4');
    var duracao1 = document.createElement('h4');

    card.classList = 'card';
    lista.appendChild(card);
    card.appendChild(imagem);
    card.appendChild(titulo1);
    card.appendChild(nota1);
    card.appendChild(duracao1);

    imagem.src = "../img/roloFilme.jpg";
    imagem.style.width = '230px';
    card.style.display = 'inline-block';
    card.style.marginLeft = '70px';
    card.style.marginTop = '60px';
    card.style.border = 'solid';
    card.style.borderColor = 'black';
    card.style.backgroundColor = '#e6b33d';
    titulo1.style.marginLeft = '5px';
    nota1.style.marginLeft = '5px';
    duracao1.style.marginLeft = '5px';

    titulo1.innerHTML = "Título: " + titulo.value;
    nota1.innerHTML = "Nota: " + nota.value;
    duracao1.innerHTML = "Duração: " + duracaoMin.value + " minutos";

    console.log(card);
}

botao1.addEventListener('click' , buscarFilme);

function buscarFilme() {
    console.log(filmes.filter((filme) => filme === busca.value));
}