//Activity 1: Variable Declaration

//Task 1: Declare a variable using var, assign it a number, and log the value to the console
var numval = 12;
console.log("Declare a variable using var and assign a number. The output is: " + numval);

//Task 2: Declare a variable using let, assign it a string, and log the value to the console
let stringval = "This contains string";
console.log("Declare a variable using let and assign a string value. The output is: " + stringval);

//Activity 1 end

//Activity 2: Constant Declaration

//Task 3: Decalre a variable using const, assign it a boolean value, and log the value to the console
const boolval = true;
console.log("Declare a variable using const and assign a bool value. The output is: " + boolval)

//Activity 2 end

//Activity 3: Data Types

//Task 4: Create variables of different datatypes(numbers, string, boolean, object, array)and log each variable's type using the typeof operator
var obj = {
    firstname: "Amandeep",
    secondname: "Singh"
}

var arr = [10,20,"conatins string", true, 56.22]

console.log(typeof(numval));
console.log(typeof(stringval));
console.log(typeof(boolval));
console.log(typeof(arr));
console.log(typeof(obj));

//Activity 3 end

//Activity 4 : Reassigning Variables

//Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console
let lval = 12;
console.log(lval);
lval = 188;
console.log(lval);

//Activity 4 end


//Activity 5 Understanding const

//Task 6: Try reassigning a variable declared with const and observe the error
const cval = 123;
console.log(cval);
cval = 567;
console.log(cval);

//Activity end