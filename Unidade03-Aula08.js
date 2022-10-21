/*
Faça como eu fiz: Usando o console.error()
PRÓXIMA ATIVIDADE

Se você já tiver feito algum teste de console.log() utilizando o navegador, possivelmente já viu os métodos console.error() e console.warn() em ação, pois nos navegadores esses métodos são identificados com as cores vermelho e amarelo e emojis.

Quando trabalhamos com NodeJS a “saída padrão” é o terminal e não o console do navegador, o que limita um pouco o uso de recursos gráficos. Vamos fazer um teste com o método console.error().

Crie um arquivo .js em seu computador, escreva o seguinte código:

console.log("deu erro");
console.error("deu erro");COPIAR CÓDIGO
Se executarmos este código com node script.js (não esqueça de conferir se está executando o comando dentro da pasta/diretório certo), o resultado é o mesmo para os dois comandos:

deu erro
deu erroCOPIAR CÓDIGO
Então não faz diferença usar um ou outro?

Faz, sim. Porém, como em qualquer linguagem de programação, é normal que alguns métodos só funcionem da forma que esperamos se fornecermos os dados necessários da forma correta.

Vamos tentar novamente, passando uma informação um pouco diferente para console.error():

console.log("deu erro");
console.error(new Error("deu erro"));COPIAR CÓDIGO
Se executarmos este código, o resultado agora é diferente:

deu erro
Error: deu erro
    at Object.<anonymous> (/home/juliana/Documents/alura/2206-fundamentosjs/comparacoes.js:21:15)
    at Module._compile (internal/modules/cjs/loader.js:1076:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:941:32)
    at Function.Module._load (internal/modules/cjs/loader.js:782:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47COPIAR CÓDIGO
O que vimos acima - a palavra-chave new seguida de Error com inicial maiúscula - é um gostinho de como trabalhamos com classes em JavaScript.

VER OPINIÃO DO INSTRUTOR
Opinião do instrutor

Precisamos dominar alguns conceitos da linguagem antes de entrarmos neste assunto, então ele não será abordado neste curso, mas mantenha esse termo e estrutura em mente.
*/