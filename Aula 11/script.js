// --> Alert, Confirm e Prompt <-- //
/* Em HTML temos o objeto 'window' e dentro deste objeto temos alguns métodos: */

// === Método Alert === //
 // Os métodos de 'window' podem ser chamados apenas como método(`mensagem`).
window.alert('Hello World!');

/* =-= Descrição do Método Alert =-= */
// 'alert' fará com que uma caixa de alerta apareça na tela, ao clicar em 'OK' o retorno é undefined //

// === Método Confirm === //
window.confirm('Você tem certeza disso?');

/* =-= Descrição do Método Confirm =-= */
/* 'confirm' fará com que uma caixa de confirmação apareça na tela, ao clicar em `OK` o
 retorno será do tipo boolean 'true' e ao clicar em `Cancel` o retorno será 'false' */

// === Método Prompt === //
window.prompt('Digite seu nome:');

/* =-= Descrição do Método Confirm =-= */
/* 'prompt' fará com que uma caixa de input apareça, ao preencher o retorno será o valor inserido */

//=====================================================================================================//

/* É possível armazenar os retornos dos métodos em variáveis/constantes */

const confirma = confirm('Realmente deseja apagar?');
console.log(confirma); // o retorno do método será armazenado na constante 'confirma'.

const inputNome = prompt('Qual seu nome?');
console.log(inputNome); // o retorno do método será armazenado na constante 'inputNome'.