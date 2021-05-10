/*
date: 10 May 2021
author: Medi Hamad

In this section we are goint to work with variables in javascript, declaring, initializing and outputing

KEYWORD FOR VARIABLE ARE:

var, let, const 

*/

//declaring a variable

var firstName = 'Medi';

// printing the variable name in the console.

console.log(firstName);

//with var and let we can reassign variables

firstName = 'Hamad';
console.log(firstName);

//with var and let we can define a variable without assigning a value to it

var lastName;

// in the above case lastName value is undefined

console.log(lastName); // undefined

/*
    rules for naming variables

    - a variable name can include letters (l or L), numbers (1), underscore (_), and money sign ($)
    - a variable name cannot start with a number -> var 1country = 'Uganda' this is not allowed
    - it is recommended to use descriptive variable name so that anyone who reads your code can understands it. For example:

    declaring a variable representing a car should be var car = 'Toyota' and not var x = 'Toyota'

    - multi word variable should follow a camel notation which means the first character of the first word is lower case and all 
    following word should start with an uppercase character. For example.

    var richestCountryInTheWorld = 'Uganda';
*/


// Creating variables with LET and CONST

/*
    let and var are very similar the difference comes on the scope let and var similar on the global scope but different when it comes to block level scope
    we will talk about that in the later sessions but for now note that it is recommended to use let instead of var.
*/

//declaring a variable

let lastFirstName = 'Medi';

// printing the variable name in the console.

console.log(lastFirstName);

//with var and let we can reassign variables

lastLastName = 'Hamad';
console.log(lastLastName);

//with var and let we can define a variable without assigning a value to it

var lastNames;

// in the above case lastName value is undefined

console.log(lastNames); // undefined

/*
    CONST

    we use const when we dont want the value of the variable to change, const means constant.

    rules for constant variable

    - cannot create an empty constant variable
    - cannot reassign constant variable

    NOTE: when we talk about arrays and objects it is different we cannot reassign but we can change the values inside
*/

const name = 'john';

const identity; // this is not allowed

identity = 'good person'; // this is not allowed

//creating an object with const and changing values inside

const person = {
    name: 'medi',
    age: 30
};

person.age = 24;

console.log(person.age); // here the value of age is now 24

// this is also applied to arrays


// declaring an array with const

const numbers = [1, 3, 4, 5];

// adding elements to the array 

numbers.push(100); // here we are adding 100 at the end of numbers array

console.log(numbers);

/*
    Object is a collection of key value pairs, if you have properties that high related we use objects to work with them, for example

    let name = 'medi';
    let age = 30;

    instead of using two separate variable we can use a person object to represent name and age

    arrays: an array is a data structure that represent a list of items.

    we shall discuss more about arrays and object in the later sessions.
*/
