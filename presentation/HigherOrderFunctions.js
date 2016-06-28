import expect from 'expect.js'

it('Funções de alta ordem', () => {

    // Uma função pura, simples e inocente
    const soma = (a,b) => {
        return a + b
    }

    // Que certamente funciona
    expect(
        soma(1,2)
    ).to.equal(
        3
    )
    expect(
        soma(5,5)
    ).to.equal(
        10
    )

})
