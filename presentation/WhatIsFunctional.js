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

    /*
        Segundo o Wikipédia:
        Uma função é uma lei que para cada valor x é correspondido por um elemento y, denotado por ƒ(x)

        ou seja:
        o termo função EXIGE que para um valor de entrada, o resultado é sempre o mesmo.
        Isso explica o que é uma função PURA, e a base da programação FUNCIONAL. (Com funções)
    */

    // Que tal "empurecer" o código acima?

})
