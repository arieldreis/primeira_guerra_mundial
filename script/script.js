function clicar_menu(){
    const menu_navegacao = document.getElementById('menu_links');
    menu_navegacao.classList.toggle('show');  // troca entre adicionar e remover
    const btn = document.getElementById('menu_navegacao');
    if(btn.style.transform === "rotate(180deg)"){
        btn.style.transform = "rotate(0deg)";
    }else{
        btn.style.transform = "rotate(180deg)";
    }
    /*
        Checa se o botão já está rotacionado (rotate(180deg)).
        Se sim, volta pra posição normal (rotate(0deg)).
        Se não, aplica a rotação.
    */
    btn.style.transition = "0.5s"
}
function voltar_cima(){
    window.scrollTo({
        top: 0, // Topo da tela
        behavior:"smooth" // Rolagem suave
    });
}
function verificacao(event){
    event.preventDefault();
    // variavel do form
    const form = document.querySelector('.formDuvidas');
    // Variaveis dos inputs
    const nomegrupo = document.getElementById('nome_grupo');
    const duvida = document.getElementById('duvida');
    // Verificação da etapa de dados.
    const groupname = nomegrupo.value.trim();
    const doubt = duvida.value.trim();
    const div = document.getElementById('content');

    div.innerHTML = ""; // Limpa mensagens anteriores
    nomegrupo.style.border = "";
    duvida.style.border = "";

    if(groupname === "" && doubt === ""){
        div.innerHTML = "Preencha os dois campos de Nome do Grupo e a sua dúvida."
        nomegrupo.style.border = "2px solid red";
        duvida.style.border = "2px solid red";
        div.style.color = "red";
    }else if(groupname === ""){
        div.innerHTML = "Preencha o campo de nome do grupo.";
        nomegrupo.style.border = "2px solid red";
        return;
    }else if(doubt === ""){
        div.innerHTML = "Preencha a sua dúvida, será importante para nosso trabalho."
        duvida.style.border = "2px solid red";
        return;
    }
    div.style.color = "red";
    div.style.marginBottom = "15px"
    div.style.textTransform = "uppercase";
    form.submit();
}
 // Pega a faixa dos slides
const track = document.getElementById('track');
// Conta qual slide está aparecendo (começa no 0)
let currentSlide = 0;
// Total de slides (divs com class="slide")
const totalSlides = track.children.length;
// Largura do slide
const slideWidth = 300;
function moveToPrev(){
// Se ainda tem próximo slide
    if(currentSlide < totalSlides - 1){
        currentSlide++;
    }else{
        currentSlide = 0; // Volta para o início
    }
    // Move a faixa pro lado usando translateX
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
function moveToNext(){
    if(currentSlide > 0){
        currentSlide--;
    }else{
        currentSlide = totalSlides - 1; // Vai pro último
    }
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Carrosel Parte 2

const track2 = document.getElementById('track2');
// Conta qual slide está aparecendo (começa no 0)
let currentSlide2 = 0;
// Total de slides (divs com class="slide")
const totalSlides2 = track.children.length;
// Largura do slide
const slideWidth2 = 300;
function moveToPrev2(){
    if(currentSlide2 < totalSlides2 - 1){
        currentSlide2++;
    }else{
        currentSlide2 = 0; // Volta para o início
    }
    // Move a faixa pro lado usando translateX
    track2.style.transform = `translateX(-${currentSlide2 * slideWidth2}px)`;
}
function moveToNext2(){
    if(currentSlide2 > 0){
        currentSlide2--;
    }else{
        currentSlide2 = totalSlides2 - 1; // Vai pro último
    }
    track2.style.transform = `translateX(-${currentSlide2 * slideWidth2}px)`;
}