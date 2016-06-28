import expect from 'expect.js'

/*  The reduce() method applies a function against an accumulator and each
value of the array (from left-to-right) to reduce it to a single value.
arr.reduce(iterator[, initialValue])
iterator: Function(previousValue, currentValue[, currentIndex, array])
*/
it('Função REDUCE', () => {

    // Existem muitas possibilidades de utilização do REDUCE,
    // limitadas apenas à criatividade
    // Aqui um exemplo legal:

    // Para fazer uma cobrança, recebemos um valor base, mas devemos exibir
    // para o usuário o valor correto a ser cobrado. Esse procedimento implica
    // em somar juros, uma taxa física, e não esquecer de exibir um cifrão na
    // frente do valor, que deve ter duas casas decimais

    const somarJuros = (valor) => valor * 1.05
    const somarTaxa = (valor) => valor + 5
    const duasCasasDecimais = (valor) => valor.toFixed(2)
    const adicionaCifrao = (valor) => '$ ' + valor

    // Quebramos cada procedimento em um problema, e definimos o array
    // procedimentoCobranca com a ordem em que eles devem ser efetuados
    const procedimentoCobranca = [
        somarJuros,
        somarTaxa,
        duasCasasDecimais,
        adicionaCifrao
    ]

    const valorRecebido = 50
    const valorAPagar = procedimentoCobranca.reduce((valor, procedimento) => procedimento(valor), valorRecebido)
    // Utilizamos um reduce no procedimentoCobranca, que vai chamar cada
    // função, da esquerda pra direita, com o valor retornado pelo procedimento
    // anterior. O valor inicial foi definido como o valorRecebido

    expect(
        valorAPagar
    ).to.equal('$ 57.50')

})
