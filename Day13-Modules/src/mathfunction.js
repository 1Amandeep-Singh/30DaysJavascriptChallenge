// Function to add two numbers
export function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  export function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply two numbers
  export function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide two numbers
  export function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }