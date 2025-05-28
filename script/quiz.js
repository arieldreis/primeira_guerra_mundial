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
// Single Page Application
const questions = {
    questionOne: `
            <h4>1. Qual foi o estopim imediato que desencadeou a Primeira Guerra Mundial em 1914?</h4>
            <div class="bloco" id="resposta_errada1" onclick"resposta_errada(this)">
                <p>A Revolução Russa.</p>
            </div>
            <div class="bloco" id="resposta_errada2" onclick="resposta_errada(this)">
                <p>A invasão da Polônia.</p>
            </div>
            <div class="bloco" id="resposta_certa1" onclick="resposta_certa(this)">
                <p>O assasinato do arquiduque Francisco Ferdinando.</p>
            </div>
            <div class="bloco" id="resposta_errada3" onclick="resposta_errada(this)">
                <p>A criação da Liga das Nações.</p>
            </div>
    `,
    questionTwo:`
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
    `,
    questionThree:`
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
    `,
    questionFour:`
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
    `,
    questionFive:`
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
    `
};
const explicao_resposta = {
    answerOne: "",
    answerTwo: "", 
    answerThree: "",
    answerFour: ""
}
/*VERIFICA SE A RESPOSTA ESTÁ CERTA OU ERRADA.*/
function resposta_errada(elementoClicado){
    // const wronganswer = document.getElementById('resposta_errada1');
    elementoClicado.style.backgroundColor = "#f75151";
    elementoClicado.style.color = "white";
    elementoClicado.style.border = "red";
}
function resposta_certa(elementoClicado){
    // const rightanswer = document.getElementById('resposta_certa1');
    elementoClicado.style.backgroundColor = "lightgreen";
    elementoClicado.style.color = "white";
    elementoClicado.style.border = "green";
}
/*SEPARAÇÃO DO CÓDIGO*/ 
let currentQuiz = 0; // variável que guarda o índice da pergunta atual (ex: 0 = primeira pergunta)
const questionsKeys = Object.keys(questions); // pega todas as "chaves" do objeto questions (ex: ['questionOne', 'questionTwo', ...])
let porcent = 0; // Logica do player
// variaveis de lógica do player
let barraContainer = document.getElementById('barraContainer');
let progressPlayer = document.getElementById('progressPlay');
function renderQuestions(){
    const container = document.getElementById('quiz-content'); // pega a div onde as perguntas vão aparecer
    const currentKey = questionsKeys[currentQuiz]; // pega a chave da pergunta atual (ex: 'questionOne')
    container.innerHTML = questions[currentKey]; // troca o conteúdo da div com a pergunta atual
}
function nextQuestion(){
    if(currentQuiz < questionsKeys.length - 1){ // só avança se ainda tiver pergunta seguinte
        currentQuiz++; // vai pra próxima pergunta (ex: de 0 para 1)
        renderQuestions(); // renderiza a pergunta anterior na tela
    }
    if(porcent < 100){
        porcent+=20;
        progressPlayer.style.width = porcent + "%";
    }
}
function prevQuestion(){
    if(currentQuiz > 0){ // só volta se não for a primeira pergunta
        currentQuiz--; // volta uma pergunta
        renderQuestions();
    }
    if(porcent > 0){
        porcent-=20; 
        progressPlayer.style.width = porcent + "%";       
    }
}
// Object.keys(questions).length para contar quantas perguntas tem.
// chama a primeira pergunta assim que a página carrega
renderQuestions();
