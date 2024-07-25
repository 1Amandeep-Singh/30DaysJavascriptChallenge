//Activity 1: Creating and Exporting Modules

//Task 1: Create a module that exports a function to add two numbers.

//Import and use this module in another script.
import { addtwonumber } from "./addtwonumber.js";

//Use the imported function
const res = addtwonumber(2,3);
console.log(`The sum of 2 and 3 is: ${res}`);


//Task 2: Create a module that exports an objects representing a person with properties and methods.

//Import and use this module in another script.
import personinfo from "./personModule.js";

console.log(personinfo.intro());

//Activity 1 end

//Activity 2: Named and Default Exports

//Task 3: Create a module that exports multiple functions using named exports.
//Import and use these funcitons in another script

// Import specific functions from the mathFunctions module
import { add, subtract, multiply, divide } from './mathfunction.js';

// Use the imported functions
console.log(`5 + 3 = ${add(5, 3)}`);         // Outputs: 5 + 3 = 8
console.log(`10 - 7 = ${subtract(10, 7)}`);  // Outputs: 10 - 7 = 3
console.log(`6 * 4 = ${multiply(6, 4)}`);    // Outputs: 6 * 4 = 24
console.log(`20 / 5 = ${divide(20, 5)}`);    // Outputs: 20 / 5 = 4

// Handle divide by zero
try {
  console.log(`10 / 0 = ${divide(10, 0)}`);
} catch (error) {
  console.error(error.message);              // Outputs: Cannot divide by zero
}

//Task 4: Create a module that exports a single function using default export.
//Import and use these funcitons in another script

// Import the default export from the greetModule
import greet from './greetModule.js';

// Use the imported function
console.log(greet('Hitesh Sir')); // Outputs: Hello, Alice!

//Activity 2 end

//Activity 3: Importing Entire Modules

//Task 5: Create a module that exports multiple constants and functions.
//Import the entire module as an objext in another script and uses its properties.

// Import the entire mathUtils module as an object
import * as mathUtils from './mathUtilities.js';

// Use the constants and functions from the imported module
console.log(`PI: ${mathUtils.PI}`);                     // Outputs: PI: 3.141592653589793
console.log(`E: ${mathUtils.E}`);                       // Outputs: E: 2.718281828459045
console.log(`5 + 3 = ${mathUtils.add(5, 3)}`);          // Outputs: 5 + 3 = 8
console.log(`10 - 7 = ${mathUtils.subtract(10, 7)}`);   // Outputs: 10 - 7 = 3
console.log(`6 * 4 = ${mathUtils.multiply(6, 4)}`);     // Outputs: 6 * 4 = 24
console.log(`20 / 5 = ${mathUtils.divide(20, 5)}`);     // Outputs: 20 / 5 = 4

// Handle divide by zero
try {
  console.log(`10 / 0 = ${mathUtils.divide(10, 0)}`);
} catch (error) {
  console.error(error.message);                         // Outputs: Cannot divide by zero
}

//Acitivity 3 end

//Activity 4: Using Third-Party Modules

//Task 6: Install a third-party (e.g., lodash) using npm.
//Import and uses a function from this module in a script.

// Import the lodash library
import _ from 'lodash';

// Use the capitalize function from lodash
const text = 'hello world';
const capitalizedText = _.capitalize(text);

console.log(capitalizedText); // Outputs: Hello world

//Task 7: Install a third-party module (e.g., axios) using npm.
//Import and use this module to make a network request in a script.

// Import the axios library
import axios from 'axios';

// Define the URL for the request
const url = 'https://jsonplaceholder.typicode.com/posts';

// Make a GET request using axios
axios.get(url)
  .then(response => {
    // Handle the response
    console.log('Data:', response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });

//Activity 4 end

//Activity 5: Module Bundling (Optional)

//Task 8: Use a module like Webpack or Parcel to bundle multiple Javascript files into s single file.
//Wrtie a script to demonstrate the bundling process.



//Activity 5 end