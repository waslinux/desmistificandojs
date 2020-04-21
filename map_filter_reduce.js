/* REDUCE com MAP e FILTER */


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
        weight: 1
    },
    {
        name: 'marrom',
        type: 'cat',
        age: 2,
        weight: 1
    },
    {
        name: 'pé de pano',
        type: 'horse',
        age: 1,
        weight: 45
    },
]

const totalWeightCat = pets
    .filter((pet) => {
        return pet.type === 'cat'
    })
    .reduce((total, pet) => {
        return total + pet.weight
    }, 0)

console.log(totalWeightCat)