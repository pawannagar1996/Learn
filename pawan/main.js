// spread is an operator (...)

// shallow clone
const array = [1,3,7,2];
console.log('array ', array);
console.log('array spread ', ...array);
const firstValue = array[0]
console.log('how console works', firstValue, array[1], array[2], array[3])

const arrayTwo = array;
console.log('arrayTwo is not a clone', arrayTwo === array);

const arrayThree = [...array];
console.log('arrayThree is a clone of array', arrayThree !== array);

const obj = { a: 30, b: 40 };
const objTwo = obj;
console.log('objTwo is not a clone', objTwo === obj);

const objThree = {...obj}; 
console.log('objThree is a clone of obj', objThree !== obj, objThree);

// deeep clone

console.log(' deeep clone')

const person = { firstName:"pawan", age:37,
    hobbies:[["deep"],['cricet', 'football']]

};

let len = person.hobbies.length

console.log('person len = ',len)
//{...nakul,subject:[...nakul.subject   ]}
const deepClonePerson = {...person,hobbies:[...person.hobbies[0],[...person.hobbies[1]]]}

len = deepClonePerson.hobbies.length

console.log('deepClonePerson len = ',len)
// deepClonePerson.hobbies[1].push(25);
deepClonePerson.hobbies[1].push("nagar");

console.log(' person', person)
console.log(' deepClonePerson', deepClonePerson)