// Tipos Primitivos

// <-- String --> //
const nome = 'Luiz';
const nome01 = "Luiz";
const nome02 = `Luiz`;

console.log(`'nome' tem valor ` + nome + ` e é uma variável de tipo ` + typeof(nome));
console.log(`'nome01' tem valor ` + nome01 + ` e é uma variável de tipo ` + typeof(nome01));
console.log(`'nome02' tem valor ` + nome02 + ` e é uma variável de tipo ` + typeof(nome02) + `\n`);

// <-- Number --> //
const num = 10;
const num01 = 10.5;

console.log(`'num' tem valor ` + num + ` e é uma variável de tipo ` + typeof(num));
console.log(`'num01' tem valor ` + num01 + ` e é uma variável de tipo ` + typeof(num01) + `\n`);

// <-- Undefined e Null --> //
let valorIndefinido; // Variável declarada mas não inicializada = não aponta pra local nenhum na memória.
const valorIndefinido01 = null; // 'null' = não aponta pra local nenhum na memória. Serve para redefinir uma variável ou explicitamente não apontar a lugar nenhum na memória.

console.log(`'valorIndefinido' tem valor ` + valorIndefinido + ` e é uma variável de tipo ` + typeof(valorIndefinido))
console.log(`'valorIndefinido01' tem valor ` + valorIndefinido01 + ` e é uma variável de tipo ` + typeof(valorIndefinido01) + `\n`)

// <-- Boolean --> //
const boolean = true; // Variáveis de tipo booleano só tem dois valores: Verdadeiro ou Falso
const boolean01 = false;

console.log(`'boolean' tem valor ` + boolean + ` e é uma variável de tipo ` + typeof(boolean));
console.log(`'boolean01' tem valor ` + boolean01 + ` e é uma variável de tipo ` + typeof(boolean01) + `\n`);

