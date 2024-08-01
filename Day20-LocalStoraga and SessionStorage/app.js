//Activity 1: Understanding LocalStorage

//Task 1: Write a script to save a string value to localStorage and retrieve it.
//Log the retrieved.

// Set a string value in localStorage
localStorage.setItem("myKey", "This is my stored value");

// Retrieve the value from localStorage
const retrievedValue = localStorage.getItem("myKey");

// Log the retrieved value to the console
console.log(retrievedValue);

//Task 2: Write a script to save an object to localStorage by converting it to a JSON string.
//Retrieve and parse the object, then log it.

// Create an object
const myObject = {
  name: "Amandeep Singh",
  age: 25,
  city: "Punjab",
};

// Convert the object to a JSON string and save it to localStorage
localStorage.setItem("user", JSON.stringify(myObject));

// Retrieve the JSON string from localStorage
const retrievedObjectString = localStorage.getItem("user");

// Parse the JSON string back into an object
const retrievedObject = JSON.parse(retrievedObjectString);

// Log the retrieved object to the console
console.log(retrievedObject);

//Activity 1 end

//Activity 2: Using LocalStorage

//Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted.
//Retrieve and display the saved data on page load.

// Function to save data to localStorage
function saveToLocalStorage(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Create an object to store the data
  const userData = {
    name: name,
    email: email,
  };

  // Convert the object to a JSON string and save it to localStorage
  localStorage.setItem("userData", JSON.stringify(userData));

  // Update the displayed data
  displaySavedData();
}

// Function to retrieve and display the saved data
function displaySavedData() {
  const savedDataElement = document.getElementById("savedData");
  const userDataString = localStorage.getItem("userData");

  if (userDataString) {
    const userData = JSON.parse(userDataString);
    savedDataElement.textContent = `Name: ${userData.name}, Email: ${userData.email}`;
  } else {
    savedDataElement.textContent = "No data saved.";
  }
}

// Attach event listener to the form
document
  .getElementById("userForm")
  .addEventListener("submit", saveToLocalStorage);

// Display saved data on page load
window.onload = displaySavedData;

//Task 4: Write a script to remove an item from local storage.
//Log the localstorage content before and after removal.

 // Function to log all items in localStorage
 function logLocalStorage() {
    console.log('Current localStorage contents:');
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(`${key}: ${value}`);
    }
}

// Function to remove a specific item from localStorage
function removeFromLocalStorage() {
    const keyToRemove = 'userData'; // Replace with the key you want to remove
    console.log('Removing item with key:', keyToRemove);

    // Log the contents of localStorage before removal
    logLocalStorage();

    // Remove the item from localStorage
    localStorage.removeItem(keyToRemove);

    // Log the contents of localStorage after removal
    logLocalStorage();
}

// Attach event listener to the button
document.getElementById('removeButton').addEventListener('click', removeFromLocalStorage);

// Initially log the contents of localStorage
logLocalStorage();

//Activity 2 end

//Activity 3: Understand SessionStorage

//Task 5: Write a script to save a string value to session storage and rerieve it.
//Log the retrieved value.

  // Save a string value to sessionStorage
  sessionStorage.setItem('mySessionKey', 'This is a session storage value');

  // Retrieve the value from sessionStorage
  const retrievedSessionValue = sessionStorage.getItem('mySessionKey');

  // Log the retrieved value to the console
  console.log(retrievedSessionValue);

//Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string.
//Retrieve and parse the object, then log it.


// Convert the object to a JSON string and save it to sessionStorage
sessionStorage.setItem('userObject', JSON.stringify(myObject));

// Retrieve the JSON string from sessionStorage
const retrievedObjString = sessionStorage.getItem('userObject');

// Parse the JSON string back into an object
const retrievedObj = JSON.parse(retrievedObjString);

// Log the retrieved object to the console
console.log(retrievedObj);

//Activity 3 end

//Activity 4: Using SessionStorage

//Task 7: Create a simple form that saves user input (e.g., name and email) to session storage when submitted.
//Retrieve and display the saved data on page load.

function saveToSessionStorage(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Create an object to store the data
    const userData = {
        name: name,
        email: email
    };

    // Convert the object to a JSON string and save it to sessionStorage
    sessionStorage.setItem('userData', JSON.stringify(userData));

    // Update the displayed data
    displaySavedData();
}

// Function to retrieve and display the saved data
function displaySavedData() {
    const savedDataElement = document.getElementById('savedData');
    const userDataString = sessionStorage.getItem('userData');

    if (userDataString) {
        const userData = JSON.parse(userDataString);
        savedDataElement.textContent = `Name: ${userData.name}, Email: ${userData.email}`;
    } else {
        savedDataElement.textContent = 'No data saved.';
    }
}

// Attach event listener to the form
document.getElementById('userForm').addEventListener('submit', saveToSessionStorage);

// Display saved data on page load
window.onload = displaySavedData;

//Task 8: Write a script to remove an item from sessionStorage.
//Log the sessionStorage content before and after removal.

  // Function to log all items in sessionStorage
  function logSessionStorage() {
    console.log('Current sessionStorage contents:');
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        console.log(`${key}: ${value}`);
    }
}

// Function to remove a specific item from sessionStorage
function removeFromSessionStorage() {
    const keyToRemove = 'userData'; // Replace with the key you want to remove
    console.log('Removing item with key:', keyToRemove);

    // Log the contents of sessionStorage before removal
    logSessionStorage();

    // Remove the item from sessionStorage
    sessionStorage.removeItem(keyToRemove);

    // Log the contents of sessionStorage after removal
    logSessionStorage();
}

// Attach event listener to the button
document.getElementById('removeButton').addEventListener('click', removeFromSessionStorage);

// Initially log the contents of sessionStorage
logSessionStorage();

//Activity 4 end

//Activity 5: Comparing LocalStorage and Session Storage

//Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage.
//Retrieve and log the values from both storage mechanisms.

  // Function to save value to both localStorage and sessionStorage
  function saveToStorages(key, value) {
    // Save to localStorage
    localStorage.setItem(key, value);
    
    // Save to sessionStorage
    sessionStorage.setItem(key, value);
    
    console.log(`Saved "${value}" under key "${key}" to both localStorage and sessionStorage.`);
}

// Function to retrieve and log values from both localStorage and sessionStorage
function retrieveFromStorages(key) {
    // Retrieve from localStorage
    const localStorageValue = localStorage.getItem(key);
    
    // Retrieve from sessionStorage
    const sessionStorageValue = sessionStorage.getItem(key);
    
    // Log the retrieved values
    console.log(`Retrieved from localStorage - Key: "${key}", Value: "${localStorageValue}"`);
    console.log(`Retrieved from sessionStorage - Key: "${key}", Value: "${sessionStorageValue}"`);
}

// Example usage
const key = 'exampleKey';
const value = 'exampleValue';

saveToStorages(key, value);
retrieveFromStorages(key);

//Task 10: Write a function that clears all data from both localStorage and sessionStorage.
//Verify that both storages are empty.

function clearStorages() {
    // Clear localStorage
    localStorage.clear();

    // Clear sessionStorage
    sessionStorage.clear();

    console.log('Both localStorage and sessionStorage have been cleared.');
}

// Function to verify that both storages are empty
function verifyStoragesAreEmpty() {
    const localStorageIsEmpty = localStorage.length === 0;
    const sessionStorageIsEmpty = sessionStorage.length === 0;

    console.log(`Is localStorage empty? ${localStorageIsEmpty}`);
    console.log(`Is sessionStorage empty? ${sessionStorageIsEmpty}`);
}

// Example usage
// Save some test data to storages for demonstration
localStorage.setItem('testKey', 'testValue');
sessionStorage.setItem('testKey', 'testValue');

console.log('Before clearing:');
verifyStoragesAreEmpty();

// Clear the storages
clearStorages();

console.log('After clearing:');
verifyStoragesAreEmpty();

//Activity 5 end
