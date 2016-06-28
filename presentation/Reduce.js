import expect from 'expect.js'

/*  The reduce() method applies a function against an accumulator and each
value of the array (from left-to-right) to reduce it to a single value.
arr.reduce(iterator[, initialValue])
iterator: Function(previousValue, currentValue[, currentIndex, array])
*/
it('Função REDUCE', () => {

    // Vamos olhar um novo exemplo com os amiguinhos
    const animals = [
        { name: 'José', species: 'bird'},
        { name: 'Claudiovaldo', species: 'dog'},
        { name: 'Boladepelo', species: 'cat'},
        { name: 'Cusco', species: 'dog'},
        { name: 'Godofredo', species: 'bird'},
        { name: 'Garfield', species: 'cat'},
        { name: 'Scooby', species: 'dog'}
    ]
    // Quero saber a quantidade de cachorros no array animals
    //  OBS: Uma alternativa é utilizar Filter com .length

    const isDog = (a) => a.species === 'dog'
    const dogReducer = (count, animal) => {
        return isDog(animal) ? count + 1 : count
    }
    const quantosDoge = animals.reduce(dogReducer, 0)
    expect(
        quantosDoge
    ).to.equal(3)

    // Forma reduzida:
    const countDoges = animals.reduce((c,a) => a.species === 'dog'? c+1 : c, 0)
    expect(
        countDoges
    ).to.equal(3)


})
