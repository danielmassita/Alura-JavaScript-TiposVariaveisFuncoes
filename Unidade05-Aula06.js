/*
06
Utilizando parâmetros
PRÓXIMA ATIVIDADE

Existem diversas linguagens de programação, como Javascript e Python. Cada uma delas possui sua própria sintaxe e em alguns momentos, se comportam de forma diferente.

Quando executamos uma função em Python que espera um parâmetro e ele não é passado, recebemos uma mensagem de erro TypeError: comParametro() takes exactly 1 argument (0 given), indicando que a função comParametro espera um parâmetro. Porém, isso não acontece no JS.

Observe o seguinte código:
*/

function comParametro(param) {
    console.log(param)
}
comParametro()

/*
Analisando o código acima, selecione a alternativa correta.


A) A palavra param será exibida no console.
De acordo com o que aprendemos, a palavra param não será exibida no console.

RESPOSTA CORRETA!
B) Como nenhum parâmetro foi passado, a saída do console será undefined.
Alternativa correta! Certo! Em JavaScript, os parâmetros de funções tem undefined como valor predefinido.

C) Diferente do TypeError do Python, no Javascript receberemos um SyntaxError: Unexpected end of function.
Diferente do Python, nenhum erro será exibido ao executar o código acima.
*/