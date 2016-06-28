import expect from 'expect.js'

it('Função MAP', () => {
    // O objetivo da função MAP é transformar os elementos de uma coleção
    // um a um, gerando uma nova coleção (de mesmo tamanho), com os elementos
    // transformados.

    // Vamos carregar nossos amigos animaizinhos novamente
    const animals = [
        { name: 'José', species: 'bird'},
        { name: 'Claudiovaldo', species: 'dog'},
        { name: 'Boladepelo', species: 'cat'},
        { name: 'Cusco', species: 'dog'},
        { name: 'Godofredo', species: 'bird'},
        { name: 'Garfield', species: 'cat'},
        { name: 'Scooby', species: 'dog'}
    ]

    // Uma das principais vantagens observáveis é na composição de funções:
    // Imagine que queremos a frase de apresentação dos cachorros apenas
    const isDog = (a) => a.species === 'dog'
    const presentationPhrase = (a) => `${a.name} is a ${a.species}`
    const presentationDogs = animals.filter(isDog).map(presentationPhrase)

    const expectedResult = [
        'Claudiovaldo is a dog',
        'Cusco is a dog',
        'Scooby is a dog'
    ]

    expect(
        JSON.stringify(presentationDogs)
    ).to.equal(
        JSON.stringify(expectedResult)
    )

})
