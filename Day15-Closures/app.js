//Activity 1: Understanding Closures

//Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope.
//Call the innner function and log the result.

function parent(){
    var name="Amandeep"
    function child(){
        console.log(name);
    }
    child();
}
parent();

//Task 2: Create a closure that maintains a private counter.
//Implements functions to increment and get the current value of the counter.

function closureCounter(){
    let count = 0;
    return{

        incrementCount: function (){
            count ++;
             //console.log(count)
        },
        getCurrentCount: function (){
            console.log(`Current Count: ${count}`);
            return count;
        }
    }
    incrementCount();
    getCurrentCount();
}
const Counter = closureCounter();
Counter.incrementCount();
Counter.incrementCount();
Counter.getCurrentCount();

//Activity 1: end

//Activity 2: Practical Closures

//Task 3: Write a function that generates unique IDs.
//Use a closure that capture a user's name and returns a function that greets the user by name.
function createuserinfo(name){
    let userID=0;
    return function(){
        userID++;
        return `Hello ${name}!`
    }
}
const greetfirstuser = createuserinfo("Aman")
const greetseconduser = createuserinfo("Deep")

console.log(greetfirstuser())
console.log(greetseconduser())


//Task 4: Create a closure that captures a user's name and returns a function that greets the user by name


//Activity 2 end 

//Activity 3: Closures in Loops

//Task 5: Write a loop that creates an array of functions. Each functions should log its index when called.
//Use a closure to ensure each functions logs the correct index

function createFunctionArray(){
    const functArr = [];
    for(let i=0;i<5;i++){

        functArr.push((function(idx){
            return function(){
                console.log(idx)
            };
        })(i));
    }
    return functArr;
}

const functionArray = createFunctionArray();
functionArray[0]();
functionArray[1]();
functionArray[2]();
functionArray[3]();
functionArray[4]();

//Activity 3 end

//Activity 4: Module Pattern

//Task 6: Use closures to create a simple module for managing a collection of items.
//Implementing methods to add, remove and list items.

function createItemCollection(){
    let itemsArr = [];
    
    return{
        addItem: function (item){
                itemsArr.push(item);
                console.log(`${item} added`);
        },

        removeItem: function(item){
            const idx = itemsArr.indexOf(item);
            if(idx!== -1){
                itemsArr.splice(idx,1);
                console.log(`${item} removed`)
            }
            else console.log(`${item} not found.`)
        },

        listItems: function(){
            console.log("Items: ", itemsArr.join(', '));
        }
    }
}

const myItemCollection = createItemCollection();

myItemCollection.addItem("Chai")
myItemCollection.addItem("Laptop")
myItemCollection.addItem("GoPro")

myItemCollection.listItems();

myItemCollection.removeItem("GoPro");

myItemCollection.listItems();

myItemCollection.removeItem("Mic");

//Activity 4 end

//Activity 5: Memorization

//Task 7: Write a function that memoizes the results of another functions. Use a closure to store the results of previous computations.

function memoize(fn) {
    const cache = {}; // Cache to store results

    return function(...args) {
        const key = JSON.stringify(args); // Convert arguments to a string key

        if (cache[key] !== undefined) {
            console.log(`Fetching result from cache for arguments: ${key}`);
            return cache[key]; // Return cached result if available
        }

        console.log(`Computing result for arguments: ${key}`);
        const result = fn(...args); // Compute the result
        cache[key] = result; // Store the result in the cache
        return result;
    };
}

// Usage example with a simple function
function slowFunction(x, y) {
    // Simulate a slow computation
    for (let i = 0; i < 1e6; i++) {}
    return x + y;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(3, 4)); // Computing result for arguments: [3,4]
console.log(memoizedSlowFunction(3, 4)); // Fetching result from cache for arguments: [3,4]
console.log(memoizedSlowFunction(5, 6)); // Computing result for arguments: [5,6]
console.log(memoizedSlowFunction(5, 6)); // Fetching result from cache for arguments: [5,6]
console.log(memoizedSlowFunction(5, 6)); // Fetching result from cache for arguments: [5,6]

//Task 8: Create a memoized version if a function that calculates the factorial of a number.

function memoizeFunction(fn) {
    const cache = {};

    return function(...args) {
        const key = args[0]; // Factorial typically uses a single argument

        if (cache[key] !== undefined) {
            console.log(`Fetching from cache: factorial(${key}) = ${cache[key]}`);
            return cache[key];
        }

        console.log(`Calculating: factorial(${key})`);
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoizeFunction(factorial);

// Usage example
console.log(memoizedFactorial(5)); // Calculating: factorial(5)
console.log(memoizedFactorial(5)); // Fetching from cache: factorial(5)
console.log(memoizedFactorial(6)); // Calculating: factorial(6) (utilizes cached factorial(5))
console.log(memoizedFactorial(6)); // Fetching from cache: factorial(6)

//Activity 5 end