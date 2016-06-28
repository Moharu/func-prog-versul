import expect from 'expect.js'

// Qual o estado do database? nunca sabemos
let readDatabase = () => {
    return Math.floor(Math.random() * 100)
}

it('Como assim funcional', () => { // porque funciona, ué

    // Exemplo de código "impuro":
    let minhaFuncao = (b) => {
        let a = readDatabase()
        return a + b
    }

    // ??????????
    expect(
        minhaFuncao(5)
    ).to.equal(
        minhaFuncao(5)
    )

})
