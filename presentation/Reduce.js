import expect from 'expect.js'

it('Função REDUCE', () => {
    // Exemplo básico:
    // Somar todos os valores de um array
    const sum = (a,b) => a+b
    const values = [10,20,15,25,30]

    const totalValue = values.reduce(sum)

    // Exemplo confuso? vamos entender melhor o reduce olhando sua documentação:
    /*  The reduce() method applies a function against an accumulator and each
        value of the array (from left-to-right) to reduce it to a single value.
    arr.reduce(iterator[, initialValue])
        iterator: Function(previousValue, currentValue[, currentIndex, array])
    */

    // Ou seja, o que reduce faz é aplicar a função definida em cada elemento
    // do array, da esquerda para a direita, utilizando o return da última chamada
    // como argumento da próxima.
    // Para a primeira chamada da função, é possível especificar o valorInicial
    // (na chamada do reduce). Se esse valor não é especificado, é utilizado o
    // primeiro valor do array.

    // Chamamos as funções no formato (estadoInicial, entrada) -> novoEstado
    // de Funções Redutoras
    // É fácil verificar que Sum é uma função redutora.

    expect(
        totalValue
    ).to.equal(
        100
    )

})
