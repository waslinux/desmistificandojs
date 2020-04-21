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
/*
const totalWeight = pets.reduce((total, pet ) => {
   // console.log(`Total: ${total}`)
    //console.log(`Pet: ${pet.name}`)

    return total + pet.weight 
},0) 

*/

/*
const totalWeight = pets.reduce((total, pet ) => {
  return {
      totalAge: total.totalAge + pet.age,
      totalWeight: total.totalWeight + pet.weight
  }
    
 },{totalAge: 0, totalWeight: 0}) 

console.log(totalWeight)
 */

const totalWeight = pets.reduce((total, pet) => {
    if (pet.type !== 'cat') 
    return total
    return total + pet.weight
}, 0)

console.log(totalWeight)