// variáveis
// não são tipáveis - Tipagem automática

// forma mais antiga de declaração
var nomeUsuario = 'Israel Marques';
console.log(nomeUsuario);

 nomeUsuario = "Eu mesmo"
 console.log(nomeUsuario);

// forma atual
 let idade = 50;
 console.log(idade);

 let email = 'profisrael.copi@fiap.com.br';
 console.log(email);

 let dataAtual = '15/09/2021';
 console.log(dataAtual);

 let chuva = true;
 console.log(chuva);

//  tipo da variável
console.log(typeof nomeUsuario);
console.log(typeof idade, idade);
console.log(typeof (chuva));

idade = 'abc';
console.log(typeof idade, idade);

const dataNascimento = '02/11/86';
console.log(dataNascimento);

// evitar do JS
console.log('Olá sou o ' + nomeUsuario + ' meu email é ' + email);

// template String - USAR O APÓSTROFE 'TEMPLATE AQUI DENTRO'
console.log(`Olá ${nomeUsuario} seu email é: ${email} ????`);

//cálculos

let n1 = 2;
let n2 = 5;
console.log(`${n1} + ${n2} = ${n1 + n2}`);
console.log(`${n1} + ${n2} = ${n1 - n2}`);
console.log(`${n1} + ${n2} = ${n1 * n2}`);
console.log(`${n1} + ${n2} = ${n1 / n2}`);
console.log(`${n1} elevado a ${n2} = ${n1 ** n2}`);

let n3 = "2";
console.log(typeof n3);
console.log(`${n1} == ${n3} = ${n1==n3}`);

// Comparação entre o valor e o tipo de dado
console.log(`${n1} === ${n3} = ${n1===n3}`);

// if - while - for -switch == iguais Java
//string-math-date-array

// array
const pessoas = ['Eu','Tu','Ele','Nós','Vós','Eles'];
console.log(pessoas);

// juntar dados diferentes
const coisas = ['Eu mesmo', 123, true, 99.89, 'JS', false];
console.log(coisas);
console.log(coisas[4]);

// funções
function mensagem(){
    alert('Olá sou uma função');
}

// pegar os botões e atribuir um evento de click
document.querySelector('#btn - 1').addEventListener;('click',mensagem);
document.querySelector('#btn - 2').addEventListener;('dblclick',mensagem);
document.querySelector('#btn - 3').addEventListener;('mouseover',mensagem);
document.querySelector('#btn - 4').addEventListener;('mouseout',mensagem);
