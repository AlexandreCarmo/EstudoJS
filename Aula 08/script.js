// Exercício. "[nome] [sobrenome] tem [idade] anos, pesa [peso] kg tem [alturaEmMetros]m de altura e seu IMC é de [valorIMC]. [nome] nasceu em [anoNascimento]"

const nome = 'Casagrande';
const sobrenome =  'do Carmo';
const alturaEmMetros = 1.85;

let idade = 22;
let peso = 65;
let imc; // peso / (altura * altura)
let anoNascimento;

/* Obs.: Na aula o professor utilizou 'const' para idade e peso mas eu optei por utilizar
'let' já que são informações mutáveis. */

imc = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'tem' , idade, 'anos, pesa', peso,'kg tem' , alturaEmMetros, 
'm de altura e seu IMC é de' , imc + '.' , nome, 'nasceu em', anoNascimento +'.');

// --> Template Strings <-- //

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaEmMetros}m de altura e seu IMC é de ${imc}. ${nome} nasceu em ${anoNascimento}.`);

/* Utilizando `` podemos colocar as variáveis/constantes em evidência 
com ${nomeDaVariável} deixando o código mais legível e organizado */