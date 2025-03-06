const dogs = [
    {
        id: 'dog-1',
        name: 'Poodle',
        temperament: ['Intelligent', 'Active', 'Instinctual', 'Faithful']
    },
    {
        id: 'dog-2',
        name: 'Bernese Mountain Dog',
        temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful']
    },
    {
        id: 'dog-3',
        name: 'Labrador Retriever',
        temperament: ['Intelligent', 'Even Tempered', 'Kind', 'Gentle']
    }
];

// Use forEach to print out the name of each dog to the console
dogs.forEach((x) => console.log(x.name));

// Use filter AND map to create a new array that contains the names of
// the dogs that are 'Kind'.
const kindDogs = null;
console.log(kindDogs); 
// -> array of kind dog objects
const kindDogsObjects = dogs.filter((a) => a.temperament.includes("Kind"));
console.log(kindDogsObjects);
const kindDogs2 = kindDogsObjects.map((b) => b.name);
console.log(kindDogs2);

// Use map to create a new array identical to the original,
// but with the id's of the dogs starting at dog-0 instead of dog-1
const reIdifiedDogs = null;
console.log(reIdifiedDogs);
// -> array of dog objects with the id starting at 0