// Conversão de Tipos
// Tipos de Dados e Booleans

// Conversão Implícita e Explítica

// Implícita (necessitam cuidados, pois podem apresentar bugs devido ao comportamento padrão)...

const numero = 456;
const numeroString = '456'; // ou podemos usar numeroString = Number('456')...
console.log(numero === numeroString); // false
console.log(numero == numeroString); // true

console.log(numero + numeroString); // Por possuir uma string, o JS vai CONCATENAR e manter tipo String...

// Explícita
// Number()
console.log(numero + Number(numeroString));
// String()
console.log(String(numero) + numeroString);
console.log(numero + Number('456a')); // Se utilizar Number + string NÃO numérica .:. NaN...

/* Comandos do GitHub pra relembrar...
git status
git add .
git status
*/