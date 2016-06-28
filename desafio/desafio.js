import fs from 'fs'
import expect from 'expect.js'

// O desafio é o seguinte:
// SEM EXECUTAR, E SEM FAZER NENHUM LOG, você deve preencher a variável "expectedOutput"
// do teste, de modo que você tenha confiança que o teste irá passar
// Depois de feito, rodar 'npm run desafio' e verificar o resultado


let output = fs.readFileSync('desafio/input.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers
    }, {})

it('', () => {
    const expectedOutput = {
        //...
    }
    expect(
        JSON.stringify(expectedOutput)
    ).to.equal(
        JSON.stringify(output)
    )
})
