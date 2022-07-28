let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varD = null;

console.log(varA, varB, varC, varD);
varD = varA
varA = varB;
varB = varC;
varC = varD;


console.log(varA, varB, varC);

