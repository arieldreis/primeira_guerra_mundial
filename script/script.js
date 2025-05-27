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

// Single Page Application

const questions = {
    questionOne: `
        <div class="Questions">
            <h4>1. Qual foi o estopim imediato que desencadeou a Primeira Guerra Mundial em 1914?</h4>
            <div class="bloco">
                <p>A Revolução Russa.</p>
            </div>
            <div class="bloco">
                <p>A invasão da Polônia.</p>
            </div>
            <div class="bloco">
                <p>O assasinato do arquiduque Francisco Ferdinando.</p>
            </div>
            <div class="bloco">
                <p>A criação da Liga das Nações.</p>
            </div>
        </div>
    `,
    questionTwo:
    `
        <div class="Questions">
            <h4>2. Quais eram os dois principais grupos de alianças que se enfrentaram durante a guerra?</h4>
            <div class="bloco">
                <p>Eixo e Aliados.</p>
            </div>
            <div class="bloco">
                <p>Tríplice Aliança e Tríplice Entente.</p>
            </div>
            <div class="bloco">
                <p>União Europeia e Pacto de Varsóvia.</p>
            </div>
            <div class="bloco">
                <p>Liga do Norte e Império Otomano.</p>
            </div>
        </div>
    `,
    questionThree:
    `
        <div class="Questions">
            <h4>3. Como a Crise dos Bálcãs contribuiu para o aumento das tensões entre as potências europeias?</h4>
            <div class="bloco">
                <p>Fortaleceu a economia da região e reduziu conflitos.</p>
            </div>
            <div class="bloco">
                <p>Aumentou o sentimento nacionalista e rivalidades entre impérios.</p>
            </div>
            <div class="bloco">
                <p>Promoveu tratados de paz duradouros.</p>
            </div>
            <div class="bloco">
                <p>Impediu o crescimento de movimentos separatistas.</p>
            </div>
        </div>
    `,
    questionFour:
    `
       <div class="Questions">
            <h4>4. O que foi o Tratado de Versalhes e como ele impactou a Alemanha após o fim da guerra?</h4>
            <div class="bloco">
                <p>Um acordo de paz que concedeu novas colônias à Alemanha.</p>
            </div>
            <div class="bloco">
                <p>Um tratado que beneficiou economicamente a Alemanha.</p>
            </div>
            <div class="bloco">
                <p>Um acordo que culpou a Alemanha pela guerra e impôs duras punições.</p>
            </div>
            <div class="bloco">
                <p>Uma aliança entre Alemanha e França contra a Inglaterra.</p>
            </div>
        </div> 
    `,
    questionFive:
    `
        <div class="Questions">
            <h4>5. Qual era a função das trincheiras durante a guerra e quais eram as condições enfrentadas pelos soldados que viviam nelas?</h4>
            <div class="bloco">
                <p>Eram locais de descanso confortável para os soldados.</p>
            </div>
            <div class="bloco">
                <p>Eram passagens secretas usadas para espionagem.</p>
            </div>
            <div class="bloco">
                <p>Serviam de proteção contra ataques inimigos, mas eram insalubres e perigosas.</p>
            </div>
            <div class="bloco">
                <p>Eram usadas apenas para armazenar armas e alimentos.</p>
            </div>
        </div> 
    `
};

function loadPage(page){
    document.getElementById('quiz-content').innerHTML = questions[page];
}