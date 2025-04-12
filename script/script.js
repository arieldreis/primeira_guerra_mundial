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