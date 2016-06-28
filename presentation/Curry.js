import expect from 'expect.js'

it('Currying functions', () => {

    // Uma função "curriada" (curried, de 'to curry')
    // é uma função que recebe múltiplos argumentos, mas
    // que são avaliados a partir de múltiplas funções que, por sua
    // vez, tem um argumento só.

    // Não entendi nada.

    // Olha lá:
    // Função padrão
    let somaTresNumeros = (a,b,c) => a + b + c
    expect(
        somaTresNumeros(1,2,3)
    ).to.equal(6)
    // Função "curriada"
    let somaTresNumerosCurry = (a) => (b) => (c) => a + b + c
    /*
        Caso não tenha entendido a expressão acima, ela pode ser
        escrita assim também:
        function(a){
            return function(b){
                return function(c){
                    return a+b+c
                }
            }
        }
    */
    expect(
        somaTresNumerosCurry(1)(2)(3)
    ).to.equal(6)

})
