//const person = {
//  name: 'Nathan',
//  age: 30,
//  location: {
//    city: 'Colorado Springs',
//    temp: 74
//  }
//};
//
//const {name, age} = person;
////const name = person.name;
////const age = person.age;
//const {city, temp} = person.location
//console.log(`${name} is ${age}.`);
//
//console.log(`Its ${temp} in ${city}`);

//const book = {
//  title: 'Ego is the Enemy',
//  author: 'Ryan Holiday',
//  publisher: {
//    name: 'Penguin'
//  }
//};
//
//const { name: publisherName = 'Self-Published' } = book.publisher;
//
//console.log(publisherName); //Penguin, Self-Published
//

const address = ['1299 S Juniper Sreet', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , price] = item; 

console.log(`A medium ${coffee} costs ${price}`);
