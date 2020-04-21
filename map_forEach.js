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
/*
const petNames = pets.map((pet) => {
    return pet.name
})
*/

const forEachPetNames = []
pets.forEach((pet) => {
    forEachPetNames.push(pet.name)
})

/*
*Foreach
* Não retorna um novo array com a mesma quantidade de elmentos.
*/

console.log(pets)
console.log(forEachPetNames)