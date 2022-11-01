// ARROW FUNCTION (ECMA ES6)

function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

console.log(apresentarArrow)
console.log(soma)

// Arrow Function com mais de uma linha de instrução...
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(20, 20));
console.log(somaNumerosPequenos(5, 20));
console.log(somaNumerosPequenos(2, 8));

// HOISTING: Arrow Function se comporta da mesma forma (listadas no topo)