// Strings

/* Algumas observações sobre Strings! */

let umaString = "Um 'texto'" // Já sabemos que podemos utilizar aspas simples em strings abertas com aspas duplas e vice-versa.
console.log(umaString);

/* Mas caso seja necessário utilizar aspas duplas dentro de aspas duplas também é possível utilizando '\'. */

umaString = "Um \"texto\"";
console.log(umaString);

/* E caso queira utilizar '\' em uma string, basta utilizar '\\'. */

umaString = "Um diretório C:\\UsuarioX\\Downloads\\.";
console.log(umaString);

//==============================================================================================================================//

//--> Observação <--// 
// =-= Strings são indexaveis =-= //

//                [01234567]
let umaString01 = "Um texto";

// É possível acessar cada caractere em uma String da seguinte maneira

console.log(umaString01[4]); // Selecionando o indice só será exibido o caractere de número 4 //

//==============================================================================================================================//

/* Funções */

// =-= charAt =-= //
/* É possível manipular Strings com diversas funções, por exemplo 'charAt()' */

console.log(umaString01.charAt(4));

// =-= concat =-= //
/* Podemos concatenar Strings utilizando 'concat' */

console.log(umaString01.concat(umaString));

// É o mesmo que fazer:

console.log(umaString + umaString01);

// =-= indexOf =-= //
/* É possível buscar em indices com 'indexOf' */

console.log(umaString01.indexOf('texto'));

// O retorno é 3 pois a palavra 'texto' se inicia no indice 3 //

/* Também é possível buscar a partir de um indice: */

console.log(umaString01.indexOf('o', 3)) // Desta maneira buscamos o caractere 'o' a partir do indice 3.

/* É possível buscar de trás pra frente com 'lastIndexOf' */

console.log(umaString01.lastIndexOf('o'));

/* E caso utilizemos a busca a partir de um indice X, buscaremos de trás pra frente a partir deste indice X */

console.log(umaString01.lastIndexOf('U', 3));

// O retorno é 0 pois o caractere 'U' se encontra no indice 0.

// =-= replace =-= //
/* É possível substituir caracteres dentro de uma String com 'replace' */

console.log(umaString01.replace('Um', 'Outro'));

// =-= length =-= //
/*Pode-se ver o tamanho de uma String com a função 'length' */

console.log(umaString01.length);

// =-= slice =-= //
/* É possível fatiar uma String con 'slice' */

console.log(umaString01.slice(3, 8)); // '3' é o indice inicial e '8' o final.
// --> Observação: Lembre-se que o indice se inicia em 0 <-- //

/* Também é possível utilizar numeros negativos: */
console.log(umaString01.slice(-5)); // A fatia se inicia a partir do indice final menos 5.

// =-= split =-= //
/* Podemos dividir Strings baseados em caracteres  com 'split'*/

console.log(umaString01.split(' ')); // Separa a String a partir do espaço em dois arrays

// =-= toUpperCase e toLowerCase =-= //
/* É possível alterar todos os caracteres de uma String para maiusculas com 'toUpperCase' ou minusculas com 'toLowerCase' */

console.log(umaString01.toUpperCase());
console.log(umaString01.toLowerCase());

//==============================================================================================================================//