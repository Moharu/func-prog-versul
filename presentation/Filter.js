import expect from 'expect.js'

// Vamos agora conhecer algumas funções de alta ordem
// Um dos principais usos, é com relação a coleções de dados

// Obs: Provavelmente qualquer linguagem deve ter algum tipo de implementação
// desses métodos.

it('Função filter', () => {
    const animals = [
        { name: 'José', species: 'bird'},
        { name: 'Claudiovaldo', species: 'dog'},
        { name: 'Boladepelo', species: 'cat'},
        { name: 'Cusco', species: 'dog'},
        { name: 'Godofredo', species: 'bird'},
        { name: 'Garfield', species: 'cat'},
        { name: 'Scooby', species: 'dog'}
    ]

    // Imagine que queremos uma nova lista, mas apenas dos catioros
    // Como é feito normalmente:
    /*
    let dogs = []
    for(let i = 0; i < animals.length; i++){
        if(animals[i].species === 'dog'){
            dogs.push(animals[i])
        }
    }
    */

    // Com filter:
    const dogs = animals.filter((a) => a.species === 'dog')

    const expectedResult = [
        { name: 'Claudiovaldo', species: 'dog'},
        { name: 'Cusco', species: 'dog'},
        { name: 'Scooby', species: 'dog'}
    ]

    // E podemos ver que realmente funciona...
    // OBS: Usamos JSON stringify aqui, porque normalmente a comparação é
    // quanto a referência do array (*a), que certamente será diferente.
    expect(
        JSON.stringify(dogs)
    ).to.equal(
        JSON.stringify(expectedResult)
    )

    /*
    // Outra opção seria definir a função de comparação fora:
    const isDog = (a) => a.species === 'dog'
    const dogs = animals.filter(isDog)
    // A principal vantagem desse método, é a separação dos problemas
    // já que, por exemplo, se quisermos todos animais que NÃO são cachorros,
    // podemos reaproveitar grande parte do código
    const notDogs = animals.filter(!isDog)
    */

})
