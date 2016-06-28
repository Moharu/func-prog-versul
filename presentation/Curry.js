import expect from 'expect.js'

it('Currying functions', () => {

    // Tá mas, por que eu iria fazer isso???
    // Para esse exemplo, vou extrair (ctrl+c ctrl+v) o código do nosso
    // exemplo da função Filter:
    const animals = [
        { name: 'José', species: 'bird'},
        { name: 'Claudiovaldo', species: 'dog'},
        { name: 'Boladepelo', species: 'cat'},
        { name: 'Cusco', species: 'dog'},
        { name: 'Godofredo', species: 'bird'},
        { name: 'Garfield', species: 'cat'},
        { name: 'Scooby', species: 'dog'}
    ]

    const isDog = (a) => a.species === 'dog'
    const dogs = animals.filter(isDog)
    // é importante reparar que estamos utilizando a função
    // "isDog", que é uma expressão bem específica. Se quisermos
    // apenas os gatos, teríamos que escrever uma nova função:
    const isCat = (a) => a.species === 'cat'

    // Como poderíamos fazer para generalizar isso?
    // Curry! (Não o tempero)
    const isSpecies = (species) => (animal) => animal.species === species
    const catiuros = animals.filter(isSpecies('dog'))
    const gatineos = animals.filter(isSpecies('cat'))

    const expectedDogs = [
        { name: 'Claudiovaldo', species: 'dog'},
        { name: 'Cusco', species: 'dog'},
        { name: 'Scooby', species: 'dog'}
    ]
    const expectedCats = [
        { name: 'Boladepelo', species: 'cat'},
        { name: 'Garfield', species: 'cat'}
    ]

    expect(
        JSON.stringify(catiuros)
    ).to.equal(
        JSON.stringify(expectedDogs)
    )
    expect(
        JSON.stringify(gatineos)
    ).to.equal(
        JSON.stringify(expectedCats)
    )

})
