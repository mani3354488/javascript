var num1 = 10;
num1 += 10;
console.log(num1);

var num2 = 20;
console.log(num2 % 2);

// functions -> create and call

function fun(){
    console.log('this is a function');
};
fun();




// function greeting(name){
//     var result = 'hello ' + name; //string concatenation
//     console.log(result);

// };
// var name = prompt("what is your name?");
// greeting(name);


// how do arguments work in functions?

//  function sumNumbers(a,b){
//      var result = a+b;
//      console.log(result);
//  };

// sumNumbers(1,'2');

// while loops 

// var num = 0;

// while (num < 100){
//     num += 1;
//     console.log(num);
// }


// for loop 

// for (let num = 0; num <= 100; num++){
//     console.log(num);
// }

//Data types 

let yourAge = 18;
let yourName = 'Bob';
let name = {first: 'jane', last: 'Doe'};
let truth = false;
let groceries = ['apple', 'banana', 'oranges'];
let random;
let nothing = null;

//strings in javascript 

let fruit = 'banana,apple,mango,mango2';
let moreFruits = 'banana\napple';
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ba', 'woo'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit[2]);
console.log(fruit.split(',')); //split by comma // take a string and convert it into array
console.log(fruit.split('')); //split by character

// Array 

let fruits = ['banana', 'apple', 'orange', 'mango'];
let newfruits = new Array('banana', 'apple', 'orange', 'mango');
console.log(newfruits[1]); //access value at index 2nd


fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruit.length; i++){
    console.log(fruits[i]);
}

// array common methods

console.log('to string', fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.pop(), fruits);
console.log(fruits.push('blackberries'), fruits);
console.log(fruits.length);
fruits[4] = 'newberry';
fruits.shift();
fruits.unshift('kiwi'); //this will add first element to an array

let vegetables = ['asparagus', 'tomamto', 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let sortNumbers = [2, 4, 667, 784, 3, 6346, 546, 34, 32453];
console.log(sortNumbers.sort(function(a, b) {return a-b})); //sorted in ascending
console.log(sortNumbers.sort(function(a, b) {return b-a})); //sorted in descending

let emptyArray = new Array();
for (let num = 0; num < 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);



// objects in javascript 
// dictionaries in python 

let student = {
    first: 'Rafeh', 
    last: 'Qazi', 
    age: 24, 
    height: 170,
    studentInfo: function (){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

// console.log(student.first);
// console.log(student.last);
// student.first = 'notRafeh';
// console.log(student.first);
// student.age++;
// console.log(student.age);

console.log(student.studentInfo());

// if conditionals and control flows (if else)

// let age = prompt('what is your age?');
// if ((age >= 18) && (age <= 35)){
//     status = 'target demo';
//     console.log(status);
// } else {
//     status = 'not my audience';
//     console.log(status);
// }

// switch statements
// diffrentiate between weekday and weekend
// day 0 --> sunday
// day 6 --> saturday
// day 4 -- > thursday --> weekday

// switch (2) {
//     case 0:
//         text = 'weekend';
//         break;
//     case 5:
//         text = 'weekend';
//         break;
//     case 6:
//         text = 'weekend';
//         break;
    
//     default:
//         text = 'weekday';
// }

// console.log(text);








