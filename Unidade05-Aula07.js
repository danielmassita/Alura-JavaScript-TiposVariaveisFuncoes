// Expressão de Função

// Declaração de Função
function minhaFuncao(param){
    //bloco de código
    //lembrar de dar o return
}
minhaFuncao("param");

// Expressão de Função - tende a ser anônima, talvez não use um nome e tal, MAS a principal diferença é...
const soma = function(num1, num2) {return num1 + num2};
console.log(soma(1, 1));

// Diferença PRINCIPAL entre declarativa e Expressiva... HOISTING

console.log(apresentar());
function apresentar() {
    return "olá"
}

console.log(soma(1, 1)) // Erro de sintaxe, pois soma só será declarado depois...

const soma = function(num1, num2) {return num1 + num2};

// DEU ERRO! Porque o JavaScript vai "listar" as functions e as var primeiramente, antes de começar a executar os códigos... Então podemos dizer que FUNCTIONS e VAR são "listadas" no topo.

/*
Transcrição
[00:00] Ju: Continuando com funções, já vimos como declarar uma função, como executar uma função e o que são parâmetros de função.

[00:09] Ju: Mas, quando estamos, às vezes, pesquisando em documentação JavaScript, às vezes vemos uma outra forma utilizada para escrever funções. Vamos dar uma olhada nela agora.

[00:21] Ju: Eu vou criar um novo arquivo e vou chamar de “expressoes.js”.

[00:26] Leonardo: Ju, só uma coisa. Você pode compartilhar a tela para nós?

[00:29] Ju: Sempre esqueço de compartilhar a tela, toda vez eu esqueço.

[00:32] Ju: Eu não vou criar nada, vou voltar, compartilhar (bem lembrado Léo) minha tela, minha tela agora está compartilhada. Vou, aí sim, criar um novo arquivo e vou chamar esse arquivo (eu já estou na pasta certa) de “expressoes-funcao.js”.

[01:01] Ju: Como estávamos falando, normalmente, a forma mais clássica de escrever função em JavaScript e diversas outras linguagens é quando escrevemos function, escrevemos o nome da função minhaFuncao e pode ou não passar parâmetros, ou (param), como costumamos reduzir.

[01:19] Ju: E dentro dela, bloco de código diz o que ela faz. Então, declaramos uma função e na hora que queremos executar essa função, nós chamamos, dizemos, inclusive, essa palavra, chamar a função, passando o parâmetro necessário para ela (“param”), seja uma string ou uma outra função, um texto, um número ou outros tipo de dados que não vamos ver nesse curso, mas, que você vai ver nos seus estudos.

[01:53] Ju: Mas, tem um outro tipo de função que chamamos de expressão de função. É uma outra forma de se escrever funções em JavaScript.

[02:03] Ju: Como escrevemos, então? Começamos criando uma const, uma variável, eu vou chamar de soma, para fazermos uma função de soma. Então, const soma =, aí sim, a palavra function, passo e abro e fecho parênteses.

[02:19] Ju: Vou passar dois parâmetros, então, por exemplo, (num1, num2) para fazermos a soma entre dois números. Aí sim, eu abro e fecho chaves e passo dentro dela return, aquela palavra, aquela cláusula que já estudamos, (return num1 +num2), que eu quero que a função soma faça.

[02:48] Ju: Se eu quiser executar é a mesma coisa. Podemos pedir para o console.log para executar a função soma, passando para dentro dela os números que quero somar, por exemplo, console.log( soma(1, 1 )).

[03:02] Ju: Eu vou só comentar a declaração de função que fizemos em cima, salvar esse código e rodar ele (já estou dentro da pasta no meu terminal) e vou rodar ele com node expressões-funcao e exibiu o 2.

[03:21] Ju: Mas, uma coisa que é importante. Às vezes, quando falamos ‘Você pode escrever função de uma forma A ou você pode escrever função da forma B’ parece a mesma coisa, mas, nem sempre é.

[03:33] Ju: Vamos ver agora, o Léo vai nos falar algumas diferenças entre essas duas formas de escrever, porque, às vezes, parece que é a mesma coisa, mas, não e quando não é, pode dar bug.

[03:45] Ju: Léo, nos ajude a identificar as diferenças entre a forma declarativa (vou escrever na primeira linha, para sabermos, declaração de função e a expressão de função).

[04:00] Leonardo: A nossa expressão de função nós não temos um nome da função, realmente. Nós criamos uma variável, que é o caso que criamos com const, e atribuiu a nossa função a essa variável.

[04:15] Leonardo: É importante ser const para não acabarmos colocando um valor dentro dela e apagando a nossa função no meio de código.

[04:24] Leonardo: Então, a nossa declaração não tem nome, propriamente dito, o nome é opcional e, geralmente, não usamos ele. E, também, acaba sendo um jeito mais curto de escrevermos a função, porque não ocupamos várias linhas, fazemos tudo numa linha só. Fica bem mais curta.

[04:43] Ju: Se nós tentarmos quebrar tudo numa linha só, usando a declaração, vai funcionar?

[04:54] Leonardo: É possível fazer, do mesmo jeito que você fez, porém, não é muito recomendado, porque seu código acaba ficando meio estranho. Não é uma boa prática fazer desse jeito, é bom quebrar as linhas, quando possível.

[05:10] Ju: Perfeito. Então, tem a questão de boas práticas, também.

[05:13] Ju: Vimos que as funções que criamos com expressão de funções, normalmente, são anônimas, elas não têm um nome. O que tem nome é a const que usamos para executar ela, mas, a função em si, embora ela possa ter um nome, como o Léo disse, nós, normalmente, não usamos, deixamos ela sem nome.

[05:36] Ju: Essas são algumas diferenças, mas, tem uma diferença que é a principal. Ela é a mais importante de sabermos entre expressão de função e a declaração de função.

[05:51] Ju: Eu vou escrever um código, o Léo vai mostrar para vocês qual é, exatamente, essa diferença.

[05:57] Ju: Vamos fazer o seguinte, eu vou comentar, por enquanto, apenas as linhas anteriores, onde as funções que já escrevemos estão sendo executadas. Vou deixar elas escritas e vamos ver qual é a diferença principal. Vou colocar várias interrogações no código para nós falarmos mais sobre ela.

[06:19] Ju: Eu vou criar uma função, uma function, do modo declarativo com a palavra-chave function, e o nome dessa função vai ser apresentar. Eu não vou passar nenhum parâmetro para ela, o que essa função vai fazer e dar return, eu vou dar um retorno numa string ”olá”; uma apresentação, estou falando olá.

[06:43] Ju: Declarei a função. Acima dela (eu criei essa função na minha linha 18), na linha 16 eu vou chamar com o console.log a função apresentar.

[07:00] Ju: ‘Ju, mas, eu posso fazer isso? Eu posso chamar a função, pedir para executar a função na linha de cima que ela está sendo declarada?’. Vamos fazer um teste. Eu vou limpar o meu terminal, rodar node espressoes.js e apareceu olá. Descobrimos que nós conseguimos fazer isso.

[07:29] Ju: Vamos fazer outro teste, então. Eu vou criar outra const soma; na verdade, vou usar a mesma const soma. Eu vou tirar ela de onde estava; na verdade, vou copiar e comentar ela e vou colar embaixo, na linha 23, só para termos todos os códigos juntos.

[07:48] Ju: Eu vou fazer a mesma coisa que eu fiz na declaração apresentar. Eu tenho a minha const soma = function passando o parâmetro e na linha de cima dela, na 22, eu vou chamar o console.log(soma passando (1, 1)), que são os parâmetros para fazermos a nossa soma, que tem que dar 2, de novo.

[08:10] Ju: Eu limpo o meu terminal e tento executar esse código e vamos ver o que aconteceu.

[08:18] Ju: O “olá” da função anterior, que era função declarada, continua, mas, na hora que o JavaScript tentou executar a função que foi feita com expressão de função, função soma, ele deu um erro de referência.

[08:34] Ju: Ele diz que não consegue acessar soma antes da inicialização. Então, Léo, fala para nós o que está acontecendo, porque esse é um comportamento do JavaScript que é muito importante entendermos como funciona, para resolvermos esse tipo de bug.

[08:50] Leonardo: Ju, o que está acontecendo é o seguinte. Quando fizemos a declaração de soma com o const, ela se comporta igual uma variável. E como uma variável no JavaScript, nós não podemos usar ela, a não ser que já tenhamos passado por ela, iniciado ela alguma vez.

[09:11] Leonardo: A exceção disso é o caso das funções que declaramos com um nome ou as var. Nesse caso, o interpretador do JavaScript vai passar pelo nosso código e puxar todas essas declarações para o topo do nosso código. Então, ele vai, primeiro, iniciar todas essas declarações e todas as nossas var, e depois vai executar o nosso código. Então, não temos esse problema, não temos esse perigo.

[09:40] Leonardo: Esse trabalho que ele faz, chamamos de hoisting, que é içar ou levantar; que é, exatamente, trazer todas essas declarações para cima do nosso código, no topo dele.

[09:54] Ju: Então, podemos dizer que o JavaScript antes de fazer qualquer coisa no código, ele lista as funções que são declaradas e o que é declarado como var, e antes de começar qualquer coisa, ele já sabe o que é. Então, por isso que funciona se nós chamarmos a função declarada antes dela existir, entre muitas aspas no código.

[10:18] Leonardo: Exatamente.

[10:20] Ju: Hoje em dia, como usamos bastante, no dia a dia, a forma de expressão de função, com const, por exemplo, como fizemos nessa aula; normalmente, usamos const, mesmo. É importante se acontecer esse erro com você, você ter em mente que é um comportamento do JavaScript, o hoisting. Esse é um detalhe importante para ter em mente.

[10:48] Ju: Esperamos que você não tenha muitos bugs no caminho e fique com a palavra chave no seu dicionário de JavaScript mental. Quando você precisar, lembrar o porquê de certos comportamentos, não é, Léo?

[11:05] Leonardo: Exatamente, é muito importante para não aparecerem erros no futuro.

[11:10] Ju: Mais alguma coisa que podemos falar, como hoistings, ou então, próximo vídeo?

[11:16] Leonardo: Podemos ir para o próximo vídeo.

[11:18] Ju: Então, até daqui a pouco.

[11:21] Leonardo: Até!
*/