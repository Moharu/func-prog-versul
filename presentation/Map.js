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

    // Quero um novo array que faça a apresentação dos animais

    /* Exemplo ilustrativo com "for"
    let presentation = []
    for(let i = 0; i < animals.length; i++){
        let a = animals[i]
        presentation.push(`${a.name} is a ${a.species}`)
    }
    */
    const presentationPhrase = (a) => `${a.name} is a ${a.species}`
    const presentation = animals.map(presentationPhrase)

    const expectedResult = [
        'José is a bird',
        'Claudiovaldo is a dog',
        'Boladepelo is a cat',
        'Cusco is a dog',
        'Godofredo is a bird',
        'Garfield is a cat',
        'Scooby is a dog'
    ]

    expect(
        JSON.stringify(presentation)
    ).to.equal(
        JSON.stringify(expectedResult)
    )

})
