//pegar o botão para aplicar a ação
document.querySelector('#alterarConteudo').addEventListener('click', ()=>{

    // pegar o elemento da página que terá seu conteudo alterado
    const novoConteudo = document.querySelector('#conteudo');
    // console.log(novoConteudo);

    // pegar o campo do formulário que terá a nova informação
    const novaInformacao = document.querySelector('#dados').value;
    // console.log(novaInformacao);

    // inserir na div a nova informação
    novoConteudo.textContent = novaInformacao;
    // novoConteudo.innerHTML = novaInformacao; cuidado com segurança
});

// iserir dados
// recuperar o botão
document.querySelector('#insereConteudo').addEventListener('click', ()=>{

    // recuperar o valor digitado
    const conteudo = document.querySelector('#novosDados').value;

    // recuperar a div que receberá o novo conteúdo e a nova tag
    const nova = document.querySelector('#novaTag')
    console.log(nova);

    // criar uma tag html na div recuperada
    const novaH2 = document.createElement('h2');

    // atribuir o valor digitado e recuperado para o h2 criado
    novaH2.textContent = conteudo;

    // adicionar na div o novo elemento h2 com o seu conteúdo
    nova.appendChild(novaH2);
});