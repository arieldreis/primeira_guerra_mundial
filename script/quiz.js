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
            <div class="bloco" id="resposta_errada1" onclick="resposta_errada(this)">
                <p>A Revolução Russa.</p>
            </div>
            <div class="bloco" id="resposta_errada2" onclick="resposta_errada(this)">
                <p>A invasão da Polônia.</p>
            </div>
            <div class="bloco" id="resposta_certa1" onclick="resposta_certa1()">
                <p>O assasinato do arquiduque Francisco Ferdinando.</p>
            </div>
            <div class="bloco" id="resposta_errada3" onclick="resposta_errada(this)">
                <p>A criação da Liga das Nações.</p>
            </div>
            <div id="explicao_pergunta0"></div>
    `,
    questionTwo:`
            <h4>2. Quais eram os dois principais grupos de alianças que se enfrentaram durante a guerra?</h4>
            <div class="bloco" id="resposta_errada1" onclick="resposta_errada(this)">
                <p>Eixo e Aliados.</p>
            </div>
            <div class="bloco" id="resposta_certa1" onclick="resposta_certa2()">
                <p>Tríplice Aliança e Tríplice Entente.</p>
            </div>
            <div class="bloco" id="resposta_errada2" onclick="resposta_errada(this)">
                <p>União Europeia e Pacto de Varsóvia.</p>
            </div>
            <div class="bloco" id="resposta_errada3" onclick="resposta_errada(this)">
                <p>Liga do Norte e Império Otomano.</p>
            </div>
            <div id="explicao_pergunta1"></div>
    `,
    questionThree:`
            <h4>3. Como a Crise dos Bálcãs contribuiu para o aumento das tensões entre as potências europeias?</h4>
            <div class="bloco" id="resposta_errada1" onclick="resposta_errada(this)">
                <p>Fortaleceu a economia da região e reduziu conflitos.</p>
            </div>
            <div class="bloco" id="resposta_certa1" onclick="resposta_certa3()">
                <p>Aumentou o sentimento nacionalista e rivalidades entre impérios.</p>
            </div>
            <div class="bloco" id="resposta_errada2" onclick="resposta_errada(this)">
                <p>Promoveu tratados de paz duradouros.</p>
            </div>
            <div class="bloco" id="resposta_errada3" onclick="resposta_errada(this)">
                <p>Impediu o crescimento de movimentos separatistas.</p>
            </div>
            <div id="explicao_pergunta2"></div>
    `,
    questionFour:`
            <h4>4. O que foi o Tratado de Versalhes e como ele impactou a Alemanha após o fim da guerra?</h4>
            <div class="bloco" id="resposta_certa1" onclick="resposta_certa4()">
                <p>Um acordo que culpou a Alemanha pela guerra e impôs duras punições.</p>
            </div>
            <div class="bloco" id="resposta_errada1" onclick="resposta_errada(this)">
                <p>Um tratado que beneficiou economicamente a Alemanha.</p>
            </div>
            <div class="bloco" id="resposta_errada2" onclick="resposta_errada(this)">
                <p>Um acordo que culpou a Alemanha pela guerra e impôs duras punições.</p>
            </div>
            <div class="bloco" id="resposta_errada3" onclick="resposta_errada(this)">
                <p>Uma aliança entre Alemanha e França contra a Inglaterra.</p>
            </div>
            <div id="explicao_pergunta3"></div>
    `,
    questionFive:`
            <h4>5. Qual era a função das trincheiras durante a guerra e quais eram as condições enfrentadas pelos soldados que viviam nelas?</h4>
            <div class="bloco" id="resposta_errada1" onclick="resposta_errada(this)">
                <p>Eram locais de descanso confortável para os soldados.</p>
            </div>
            <div class="bloco" id="resposta_errada2" onclick="resposta_errada(this)">
                <p>Eram passagens secretas usadas para espionagem.</p>
            </div>
            <div class="bloco" id="resposta_certa1" onclick="resposta_certa5()">
                <p>Serviam de proteção contra ataques inimigos, mas eram insalubres e perigosas.</p>
            </div>
            <div class="bloco"id="resposta_errada3" onclick="resposta_errada(this)">
                <p>Eram usadas apenas para armazenar armas e alimentos.</p>
            </div>
            <div id="explicao_pergunta4"></div>
    `,
    final: `
        <div class="Questions" id="quiz-content"> <!--Single page Application-->
            <h2 class="alinhamentoText">Resultado do Quiz</h3>
            <h3 class="alinhamentoText">Você acertou <span id=""></span> de 5 questões (0%)</h4>
            <p>Continue fazendo um trabalho, e continue estudando sobre a Primeira Guerra Mundial.</p>
            <div class="containerButtonSPA">
                <button onclick="redirecionar('quiz.html')">Reiniciar</button>
            </div>
        </div>
        <div class="buttons" style="display:none;">
            <button onclick="prevQuestion()">Anterior</button>
            <button onclick="nextQuestion()">Próxima</button>
        </div>
    `
};
/*REDIRECIONAMENTO DE PÁGINA*/
function redirecionar(arquivo){
    window.location.href = arquivo;
}
/*VERIFICA SE A RESPOSTA ESTÁ CERTA OU ERRADA.*/
function resposta_errada(elementoClicado){
    elementoClicado.style.backgroundColor = "#f75151";
    elementoClicado.style.color = "white";
    elementoClicado.style.border = "red";
}
function resposta_certa1(){
    const explicaoOne = document.getElementById('explicao_pergunta0');
    explicaoOne.innerHTML = `<p>O estopim imediato da Primeira Guerra Mundial foi o assassinato do arquiduque Francisco Ferdinando, 
    herdeiro do Império Austro-Húngaro, em 28 de junho de 1914, na Bósnia. O crime foi cometido por um 
    jovem nacionalista sérvio. Esse evento acirrou as tensões entre os países europeus, levando ao início do 
    conflito poucas semanas depois.</p>`;
    explicaoOne.style.padding = "20px";
    explicaoOne.style.backgroundColor = "#e6e6d1";
    explicaoOne.style.borderRadius = "8px";
    const respostaCerta = document.getElementById('resposta_certa1');
    respostaCerta.style.backgroundColor = "lightgreen";
    respostaCerta.style.color = "white";
    respostaCerta.style.border = "green";
}
function resposta_certa2(){
    const explicaoTwo = document.getElementById('explicao_pergunta1');
    explicaoTwo.innerHTML = `<p>Durante a Primeira Guerra Mundial, os dois principais grupos de alianças foram a Tríplice Aliança (Alemanha, 
    Áustria-Hungria e Itália) e a Tríplice Entente (França, Rússia e Reino Unido). Essas alianças formaram os lados 
    opostos no conflito, aumentando a escala da guerra.</p>`;
    explicaoTwo.style.padding = "20px";
    explicaoTwo.style.backgroundColor = "#e6e6d1";
    explicaoTwo.style.borderRadius = "8px";
    const respostaCerta = document.getElementById('resposta_certa1');
    respostaCerta.style.backgroundColor = "lightgreen";
    respostaCerta.style.color = "white";
    respostaCerta.style.border = "green";
}
function resposta_certa3(){
    const explicacaoThree = document.getElementById('explicao_pergunta2');
    explicacaoThree.innerHTML = `<p>A Crise dos Bálcãs aumentou o nacionalismo entre os povos da região e gerou rivalidades entre os grandes 
    impérios europeus, como o Império Austro-Húngaro e a Rússia. Isso fez crescer as tensões e contribuiu para 
    o clima de instabilidade que desencadeou a Primeira Guerra Mundial.</p>`;
    explicacaoThree.style.padding = "20px";
    explicacaoThree.style.backgroundColor = "#e6e6d1";
    explicacaoThree.style.borderRadius = "8px";
    const respostaCerta = document.getElementById('resposta_certa1');
    respostaCerta.style.backgroundColor = "lightgreen";
    respostaCerta.style.color = "white";
    respostaCerta.style.border = "green";
}
function resposta_certa4(){
    const explicacaoFour = document.getElementById('explicao_pergunta3');
    explicacaoFour.innerHTML = `<p>O Tratado de Versalhes, assinado em 1919, foi o acordo que encerrou a Primeira Guerra Mundial. Ele <strong>culpou
        a Alemanha pelo conflito</strong> e impôs duras punições, como pesadas indenizações financeiras, perda de 
        territórios e limitações militares. Essas condições afetaram muito a economia e a política alemãs, criando um 
        ambiente de insatisfação que contribuiu para a Segunda Guerra Mundial.</p>`;
        explicacaoFour.style.padding = "20px";
        explicacaoFour.style.backgroundColor = "#e6e6d1";
        explicacaoFour.style.borderRadius = "8px";
        const respostaCerta = document.getElementById('resposta_certa1');
        respostaCerta.style.backgroundColor = "lightgreen";
        respostaCerta.style.color = "white";
        respostaCerta.style.border = "green";
}
function resposta_certa5(){
    const explicacaoFive = document.getElementById('explicao_pergunta4');
    explicacaoFive.innerHTML = `<p>Ás trincheiras eram valas usadas para proteger os soldados dos ataques inimigos durante a guerra. Apesar de 
    oferecerem abrigo, as condições eram muito ruins: os soldados enfrentavam lama, frio, doenças e falta de 
    higiene, tornando a vida nas trincheiras muito difícil e perigosa.</p>`;
    explicacaoFive.style.padding = "20px";
    explicacaoFive.style.backgroundColor = "#e6e6d1";
    explicacaoFive.style.borderRadius = "8px";
    const respostaCerta = document.getElementById('resposta_certa1');
    respostaCerta.style.backgroundColor = "lightgreen";
    respostaCerta.style.color = "white";
    respostaCerta.style.border = "green";
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
