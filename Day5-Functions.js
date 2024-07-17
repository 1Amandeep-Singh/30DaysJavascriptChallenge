//Activity 1: Function Declaration

//Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOrOdd(number) {
  if (number % 2 == 0) console.log(number + "is even");
  else console.log((number = "is Odd"));
}
checkEvenOrOdd(27);

//Task 2: Write a function to calculate the square of a number and return the result.

function toFindSquareRoot(number) {
  console.log((number *= number));
}
toFindSquareRoot(8);

//Activity 1 end

//Activity 2: Function Expression

//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console

function toFindMaximumNumber(numb1, numb2) {
  if (numb1 < numb2) console.log(numb2 + " is greater than " + numb1);
  else console.log(numb1 + " is greater than " + numb2);
}
toFindMaximumNumber(58, 92);

//Task 4: Write a function expression to concatenate two string and return the result

function concatenateString(firstelement, secondelement, thirdelement) {
  console.log(firstelement + secondelement + thirdelement);
}
concatenateString("Chai", "Aur", "Code");

//Activity 2 end

//Activity 3: Arrorwfunction

//Tak 5: Write an arrow function to calculate the sum of two numbers and return the result
let sumfunction = (a, b) => a + b;
sumfunction(10, 39);

//Task 6: Write an arrow function to check if a string contains a specific character and returns a boolean value

let toFindSpecificCharacter = (text, charToFind) => text.includes(charToFind);
console.log(toFindSpecificCharacter("chai@urcode", "@"));

//Activity 3 end

//Activity 4: Function Parameters and Default values

//Task 7: Write a function that takes two parameters and return their product. Provide a default value for the second parameter

const product = (firstparam, secondparam = 57) => firstparam * secondparam;
product(2);

//Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const message = (name, age = 18) => "Hello " + name;
message("Hitesh Sir");

//Activity 4 end

//Activity 5: High-Order Functions

//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many time.

function higherOrderFunction(fun, n) {
  for (let i = 0; i < n; i++) fun();
}
const callbackfun = () => console.log("chaiaurCode");
higherOrderFunction(callbackfun, 10);

//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the values, and then applies the second to the result.

const func = (firstfun, secondfun, val) =>
  secondfun(firstfun(val));

const firstfun = x=> x+2;
const secondfun = x=> x-2;
const res = func(firstfun,secondfun,2);
console.log(res);

//Activity 5 end
