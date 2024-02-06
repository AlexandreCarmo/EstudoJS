// Variáveis let

console.log('"João" nasceu em 1984');
console.log('Em 2000 "João" conheceu Maria.');
console.log('"João" casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com "João" em 2015.');
console.log('O filho de "João" se chama Eduardo. \n');

/* O nome 'João' se repete diversas vezes durante o código, portanto podemos  
criar uma variável let para guardar este valor que pode ser usado posteriormente. */

let nome = 'João'; // String

console.log( nome, ' nasceu em 1984');
console.log('Em 2000 ', nome ,' conheceu Maria.');
console.log(nome ,' casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com ', nome ,' em 2015.');
console.log('O filho de' , nome , 'se chama Eduardo. \n');

/* Desta forma, podemos mudar o valor da variável 'nome' para qualquer outro valor
sem a necessidade de alterar todas as linhas do código. */

nome = 'Otávio';

console.log( nome, ' nasceu em 1984');
console.log('Em 2000 ', nome ,' conheceu Maria.');
console.log(nome ,' casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com ', nome ,' em 2015.');
console.log('O filho de' , nome , 'se chama Eduardo. \n\n');

//============================================================================================//

// Variáveis podem ser declaradas sem que sejam inicializadas.

let nome01; // Declaração de variável.
nome01 = 'Nome qualquer';
console.log(nome01);