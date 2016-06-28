import expect from 'expect.js'
import fs from 'fs'

// Nosso estagiário possuía uma informação muito importante, que precisava
// ser criptografada. O problema foi que ele esqueceu de commitar a ultima
// versão do algoritmo que fez para produzir a mensagem, e não lembra
// exatamente como foi feito.
// O seu desafio é tentar descobrir qual é a tal mensagem super importante!

// Abaixo está o ultimo commit do git que foi possível recuperar
// A mensagem criptografada está no arquivo input.txt


// Utilize 'npm run desafio2' para rodar a função abaixo
it('', () => {
    const message = fs.readFileSync('desafio2/input.txt', 'utf8')
    const counted = message.split('').sort()
        .reduce((m, c) => {
            //...
        }, {})
    const values = Object.keys(counted).map((k) => {
            //...
    })
    // itoa
    const finalMessage = values.map((v) => {
            //...
    }).join('')

    console.log(finalMessage)
})
