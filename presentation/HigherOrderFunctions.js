import expect from 'expect.js'

it('Funções de alta ordem', () => {

    const sum = (a,b) => a+b
    const sub = (a,b) => a - b
    const mul = (a,b) => a * b
    const div = (a,b) => a / b

    // O quê você acha desse código?
    const calculator = (a,b,op) => {
        switch(op){
            case 'sum':
                return sum(a,b)
            break;
            case 'sub':
                return sub(a,b)
            break;
            case 'mul':
                return mul(a,b)
            break;
            case 'div':
                return div(a,b)
            break;
        }
    }

    // Ele funciona perfeitamente...
    expect(
        calculator(4,2,'sum')
    ).to.equal(6)
    expect(
        calculator(4,2,'sub')
    ).to.equal(2)
    expect(
        calculator(4,2,'mul')
    ).to.equal(8)
    expect(
        calculator(4,2,'div')
    ).to.equal(2)

    // E se eu quiser implementar as funções módulo, resto, potencia, etc ?
    // Ela vai ficar cada vez maior, e eu vou brincar de passar strings
    // pra cá e pra lá.

})
