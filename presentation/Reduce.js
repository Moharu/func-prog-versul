import expect from 'expect.js'

/*  The reduce() method applies a function against an accumulator and each
value of the array (from left-to-right) to reduce it to a single value.
arr.reduce(iterator[, initialValue])
iterator: Function(previousValue, currentValue[, currentIndex, array])
*/
it('Função REDUCE', () => {

    // Um exemplo mais complexo
    const animals = [
        { name: 'José', species: 'bird'},
        { name: 'Claudiovaldo', species: 'dog'},
        { name: 'Boladepelo', species: 'cat'},
        { name: 'Cusco', species: 'dog'},
        { name: 'Godofredo', species: 'bird'},
        { name: 'Garfield', species: 'cat'},
        { name: 'Scooby', species: 'dog'}
    ]
    // Quero saber a quantidade de animais por espécie,
    // o resultado esperado é um json nesse formato:
    const expectedResult = {
        bird: 2,
        dog: 3,
        cat: 2
    }

    const countedSpecies = animals.reduce((counter, animal) => {
        console.log('Estado inicial: ', counter)
        console.log('Animal da vez: ', animal)
        counter[animal.species] = counter[animal.species] || 0
        // Gambiarra javascríptica que estabelece o valor 0 para a chave
        // caso ela não esteja definida
        counter[animal.species] += 1
        // Soma a espécie atual
        console.log('Novo estado: ', counter)
        return counter
    },{}) // parâmetro initialValue = {} (objeto vazio)

    expect(
        JSON.stringify(countedSpecies)
    ).to.equal(
        JSON.stringify(expectedResult)
    )

})
