console.log("Hello World");

//declaring variable

// let name = 'Mani';
// console.log(name);

// let firstName = 'Mani', lastName = 'Nath';

//constants
//use const if there is no change in declaration later, if not use let
const intrestRate = 0.3;
// intrestRate = 1;
console.log(intrestRate);

// let name = "Manii"; //string literal
// let age = "24"; //Number literal
// let isApproved = true; //Boolean literal
// let firstName = undefined;
// let selectedColor = null;

let name = 'Mosh'
let age = '30'
let person = {
    name: 'Mosh',
    age: '30'
};

//Dot Notation
person.name = 'john';

//Bracket Notation
person['name'] = 'Mary';

console.log(person.name);

let selectedCars = ['red', 'blue'];
selectedCars[2] = '1';
console.log(selectedCars.length);

//functions

// function greet(book, time) {
//     console.log('Hello' +  book + time);
// }

// greet(' john green', ' new')

function sq(num){
    return num * num;
}

console.log(sq(2));

// let num = sq(2);
// console.log(num);



