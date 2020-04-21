const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 30
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2,
        weight: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 0.01
    },
    {
        name: 'marrom',
        type: 'cat',
        age: 2,
        weight: 1.5
    },
    {
        name: 'pé de pano',
        type: 'horse',
        age: 1,
        weight: 45
    },
]

const petNames = pets.map((pet) => {
    return pet.name
})

/*
* Map
* Retornar um novo array com a mesma quantidade de elementos
* que o array inicial
*/

console.log(pets)
console.log(petNames)