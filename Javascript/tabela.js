// manipulando o HTML == DOM - Document Object Model
// Entende o HTML como uma grande árvore de nós (tag)
// Alterar - excluir - inserir

const personagens = document.querySelector('personagemDados');
console.log(personagens);

// antigo
const personagens2 = document.getElementById("personagensDados");
console.log(personagens2);

// classe - querySelector retornará apenas o PRIMEIRO QUE ELE ENCONTRAR
//querySelectorAll - retorna todos como um Array
const nomePersonagens1 = document.querySelectorAll('.nome-personagem');
console.log(nomePersonagens1);

// antigo
const nomePersonagens2 = document.getElementsByClassName('nome-personagem');
console.log(nomePersonagens2);

// pegando uma tag
const todasTds = document.querySelectorAll('td');
console.log(todasTds);
console.log(todasTds[4].textContent);
todasTds[4].textContent = 'kylo';

// pegando tr
const todasTrs = document.getElementsByTagName('tr');
console.log(todasTrs);
