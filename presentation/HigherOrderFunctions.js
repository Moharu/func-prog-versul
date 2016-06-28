import expect from 'expect.js'

it('Funções de alta ordem', () => {

    const sum = (a,b) => a+b
    const sub = (a,b) => a - b
    const mul = (a,b) => a * b
    const div = (a,b) => a / b
    const mod = (a,b) => a % b
    const pot = (a,b) => Math.pow(a,b)

    // que tal então...
    const calculator = (a, b, operation) => {
        return operation(a,b)
    }

    // Voilá!
    expect(
        calculator(4,2,sum)
    ).to.equal(6)
    expect(
        calculator(4,2,sub)
    ).to.equal(2)
    expect(
        calculator(4,2,mul)
    ).to.equal(8)
    expect(
        calculator(4,2,div)
    ).to.equal(2)
    expect(
        calculator(4,2,mod)
    ).to.equal(0)
    expect(
        calculator(4,2,pot)
    ).to.equal(16)

    // Nesse caso, calculator é uma função de alta ordem
    // ou seja, ela tem como um de seus parâmetros, OUTRA função

    // CUIDADO: Como javascript dá muita liberdade, precisamos ter cuidado
    // para passar como argumento apenas funções que recebam dois argumentos (a,b)

    // Já que economizamos bastante tempo codificando, podemos fazer uma pequena
    // documentaçaozinha, para ajudar quem for debugar isso futuramente :)

    /** calculator(n1,n2,f)
            n1: Number
            n2: Number
            f: Function(Number, Number)
    */

})
