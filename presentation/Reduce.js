import expect from 'expect.js'

it('Função REDUCE', () => {
    // Provavelmente uma das funções de alta ordem mais importantes
    // e mais versáteis.
    // Com o REDUCE, é possível implementar Filter, Map, entre muitos outros
    // Quando você não sabe qual a função que deve utilizar para modificar uma
    // coleção, REDUCE provavelmente é a resposta certa.

    // Exemplo básico:
    // Somar todos os valores de um array
    const sum = (a,b) => a+b
    const values = [10,20,15,25,30]

    const totalValue = values.reduce(sum)
    expect(
        totalValue
    ).to.equal(
        100
    )

})
