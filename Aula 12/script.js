let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// Exercício - Faça com que varA = 'B', varB = 'C' e varC = 'A'.

let aux = varA; // A
varA = varB; // B
varB = varC; // C
varC = aux; // A

console.log(varA, varB, varC);