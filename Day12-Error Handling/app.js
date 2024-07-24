//Activity 1: Basic Error Handling with Try-Catch

//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error
//and log an appropriate messges to the console

function causeError() {
  throw new Error("This is an intentional error!");
}

function main() {
  try {
    causeError();
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

main();

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero.
//Use a try-catch block to handle this error
function dividenum(numertor, denominator) {
  if (denominator === 0) throw new Error("Denominator is Zero");
  return numertor/denominator;
}
function mainfn() {
  try {
   let res = dividenum(10, 5);
   console.log("Rsult: ", res);
  } catch (error) {
    console.error("An error occured: ", error.message);
  }
  try {
   let res = dividenum(10, 0);
   console.log("Rsult: ", res);
  } catch (error) {
    console.error("An error occured: ", error.message);
  }
}
mainfn();

//Activity 1 end

//Activity 2: Finally Block

//Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the catch,
//and finally blocks to observe the execution flow

function riskyOperation() {
    // Simulate an error occurring 50% of the time
    if (Math.random() > 0.5) {
        throw new Error("An unexpected error occurred!");
    }
    console.log("Operation succeeded!");
}

function executeriskyoperation() {
    try {
        console.log("Starting risky operation...");
        riskyOperation();
    } catch (error) {
        console.error("An error was caught:", error.message);
    } finally {
        console.log("Finally block executed. Cleaning up or finalizing operations.");
    }
}

executeriskyoperation();

//Activity 2 end

//Activity 3: Custom Error Objects

//Task 4: Create a custom error class that extend the built-in Error class.
//Throws an instance of this custom error in a function and handle it using a try-catch block

// Custom error class definition
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError"; // Set the error name to differentiate it
    }
}

// Function that throws the custom error
function riskyFunction() {
    // Simulate a condition that causes an error
    const condition = true; // You can change this to `false` to simulate different outcomes
    if (condition) {
        throw new CustomError("A custom error occurred!");
    }
    console.log("Function executed without any errors.");
}

// Main function to demonstrate error handling
function customerrorobj() {
    try {
        riskyFunction();
    } catch (error) {
        if (error instanceof CustomError) {
            console.error("Caught a custom error:", error.message);
        } else {
            console.error("An unexpected error occurred:", error);
        }
    } finally {
        console.log("Finally block executed.");
    }
}

customerrorobj();

//Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails.
//Handle the custom error using a try-catch block

// Custom error class for input validation
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError"; // Set the error name to differentiate it
    }
}

// Function to validate user input
function validateInput(input) {
    if (!input || input.trim() === "") {
        throw new ValidationError("Input cannot be empty or only whitespace.");
    }
    console.log("Input is valid:", input);
}

// Main function to demonstrate validation and error handling
function fnvalidate() {
    const userInput = ""; // Example of invalid input (empty string)
    // const userInput = "Valid input"; // Example of valid input

    try {
        validateInput(userInput);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("Validation error:", error.message);
        } else {
            console.error("An unexpected error occurred:", error);
        }
    } finally {
        console.log("Input validation process completed.");
    }
}

fnvalidate();

//Activity 3 end

//Activity 4: Error Handling in Promises

//Task 6: Create a promise that randomly resolves or rejects. Use .catch(). Log an appropriate error message to the console

function randomPromise() {
    return new Promise((resolve, reject) => {
        // Simulate some asynchronous operation
        setTimeout(() => {
            const success = Math.random() > 0.5; // 50% chance of success
            if (success) {
                resolve("Operation successful!");
            } else {
                reject(new Error("Operation failed!"));
            }
        }, 1000); // 1-second delay to simulate async work
    });
}

randomPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects,
//and log the error message

// Function that returns a promise which randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        // Simulate some asynchronous operation with a delay
        setTimeout(() => {
            const success = Math.random() > 0.5; // 50% chance of success
            if (success) {
                resolve("Operation successful!");
            } else {
                reject(new Error("Operation failed!"));
            }
        }, 1000); // 1-second delay to simulate async work
    });
}

// Async function using try-catch to handle promise resolution and rejection
async function asyncfn() {
    try {
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
}

// Call the asyncfn function
asyncfn();

//Activity 4 end

//Activity 5: Graceful Error Handling in Fetch

//Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch().
//Log an appropriate error message to the console

// Function to make a fetch request to an invalid URL
function fetchData() {
    const invalidUrl = "https://invalid-url.example.com";

    fetch(invalidUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Data received:", data);
        })
        .catch(error => {
            console.error("An error occurred while fetching data:", error.message);
        });
}

// Call the function to make the request
fetchData();

//Task 9: Use the fetch API to request data from an invalid URL within an asyc function and handle the error using try-catch.
//Log an appropriate error message
// Async function to fetch data from an invalid URL
async function fetchDataAsync() {
    const invalidUrl = "https://invalid-url.example.com";

    try {
        const response = await fetch(invalidUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.error("An error occurred while fetching data:", error.message);
    }
}

// Call the async function to make the request
fetchDataAsync();


//Activity 5 end