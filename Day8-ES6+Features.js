//Activity 1: Template literals

//Task 1: Use template literals to create a string that includes variables for a person's name and age,
//and log the string to the console.
const name = "Aman";
const age = 23;
const info = `${name} ${age}`;
console.log(info);

//Task 2: Create a multi-line string using template literals and log it to the console.
const multilinestring = `chaiaurcodechaiaurcodechaiaurcodechaiaurcode
chaiaurcodechaiaurcodechaiaurcodechaiaurcode
chaiaurcodechaiaurcodechaiaurcodechaiaurcode
chaiaurcodechaiaurcodechaiaurcodechaiaurcodechaiaurcode
chaiaurcodechaiaurcodechaiaurcodechaiaurcodechaiaurcode
chaiaurcodechaiaurcodechaiaurcodechaiaurcodechaiaurcode
chaiaurcodechaiaurcodechaiaurcodechaiaurcodechaiaurcode`;
console.log(multilinestring);

//Activity 1 end

//Activity 2: Destructuring

//Task 3: Use array destructuring to extract the first and second elements from an array of numbers
//and log them to the console
const arr = ["Amandeep", "Singh"];
const [firstelement, secondelement] = arr;
console.log(`${firstelement} ${secondelement}`);

//Task 4: Use object destructring to extract the title and author from a book object and
//log them to the console
const book = {
  title: "ZAFARNAMA",
  author: "DHAN DHAN SHRI GURU GOBIND SINGH",
};
const { title, author } = book;
console.log(`${title} by ${author}`);

//Activity 2 end

//Activity 3: Spread and Rest Operators

//Task 5: Use the spread operator to create a new array that includes
//all elements of an existing array plus additional elements,
//and log the new array to the console
const newarray = [...arr, 6, 7, 8];
console.log(newarray);

//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them,
//and return the result
function sum(...theargs) {
  let sum = 0;
  for (var args of theargs) sum += args;
  return sum;
}
const res = sum(1, 2, 3);
console.log(res);

//Activity 3 end

//Activity 4: Default Parameters

//Task 7: Write a function that takes two parameters and return their product, with
//the second parameter having a default value of 1.
//Log the result of calling this function with and without the second parameter
function product(a,b=1) { return a*b;}
const res1 = product(4,9)
const res2 = product(4)
console.log(res1)
console.log(res2)
//Activity 4 end

//Acitivity 5: Enhanced Object Literals

//Task 8: Use enhanced object literals to create an object with methods and properties
//and log the object to the console
const label  = "Adidas";
const origin = "Vietnam";

const shoebrand = {
    label,
    origin,
    shoesdescrition (){
        console.log(`Shoe brand ${this.label} factory is in ${this.origin}`)
    },
}
console.log(shoebrand);
shoebrand.shoesdescrition();

//Task 9: Create an object with computed property names based on variables and log the object to the console

const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'city';

const firstName = 'Hitesh';
const lastName = 'Chaudhary';
const city = "Jaipur";

const person = {
  [propName1]: firstName,
  [propName2]: lastName,
  [propName3]: city,
};

console.log("Person object with computed property names:", person);

//Activity 9
