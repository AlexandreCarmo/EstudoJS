/* --> Operadores Aritméticos ,de Atribuição e de Incremento <-- */

// --> Operadores Aritméticos <-- //
// === Adição / Concatenação === //
const num01 = 5; // Tipo number
const num02 = 2;
const num03 = '5'; // Tipo String
const num04 = '2';

console.log(`A soma entre os números`, num01 ,`e`, num02 , `é igual a: ` + (num01 + num02) + `\n`); // Adicão

console.log(`A concatenação entre os números`, num03 ,`e`, num04 , `é igual a: ` + (num03 + num04) + `\n`); // Concatenação

// === Multiplicação === //
console.log(`A multiplicação entre`, num01 , `e` , num02 , `é igual a: ` + (num01 * num02) + `\n`)

// === Divisão === //
console.log(`A divisão entre`, num01 , `e` , num02 , `é igual a: ` + (num01 / num02) + `\n`)

// === Subtração === //
console.log(`A subtração entre`, num01 , `e` , num02 , `é igual a: ` + (num01 - num02) + `\n`)

// === Potenciação === //
console.log(`A potenciação entre`, num01 , `e` , num02 , `é igual a: ` + (num01 ** num02) + `\n`)

// === Resto === //
console.log(`O resto da divisão entre`, num01 , `e` , num02 , `é igual a: ` + (num01 % num02) + `\n`)

//=====================================================================================================//

// --> Operador de Incremento <-- //
let contador = 0;

console.log(`Contador com valor inicial: ` + contador);
contador++;
console.log(`Valor do contador após o incremento: ` + contador + `\n`);

/* === Observação === */
/* O operador de incremento pode ser utilizado antes ou após o nome da variável, 
 isso fará com que a ação de soma seja feita antes ou depois */

 // --> Exemplo <-- //

 let contador01 = 0;
 console.log(`Contador com operador '++' após o nome da variável: `); 
 console.log(contador01++); // O contador só executará a soma na próxima linha de comando.

 console.log(`Contador com operador '++' antes do nome da variável: `); 
 console.log(++contador01 + `\n`); // A soma será executada imediatamente e o resultado será mostrado na mesma linha.

 /* === Observação === */
 /* Assim como '++' é utilizado como um operador de incremento, também é possível utilizar '--' para decremento. */

//=====================================================================================================//

// --> Operadores de Atribuição <-- //
/* É possível atribuir valores à uma variável utilizando operadores de atribuição, deixando o código mais limpo */

console.log(`Operadores de Atribuição:`)
let contador02 = 0;

contador02 = contador02 + 2; 
console.log(contador02);

// =-= Com operador '+=' =-= //
contador02 = 0;
contador02 += 2; // 'contador += 2' é igual a contador02 = contador02 + 2
console.log(contador02 + `\n`);

/* === Observação === */
/* É possível fazer o mesmo com outros operadores! */

// --> Exemplos <-- //
let contador03 = 0;
contador03 += 2;
console.log(contador03);

contador03 *= 2; // Multiplicação
console.log(contador03);

contador03 -= 2; // Subtração
console.log(contador03);

contador03 **= 10 // Potenciação
console.log(contador03);

contador03 /= 10 // Divisão
console.log(contador03);