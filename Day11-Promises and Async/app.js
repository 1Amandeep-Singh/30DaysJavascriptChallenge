//Activity 1: Understanding Promises

//Task 1: Creating a promise that resolves with a message after a 2-second timeout and log the message to the console.

function delayedMessage() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("This is the resolved message after 2 seconds");
      }, 2000);
    });
  }
  
  delayedMessage().then((message) => {
    console.log(message);
  });

//Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

function delayedError() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("This is the error message after 2 seconds"));
      }, 2000);
    });
  }
  
  delayedError().catch((error) => {
    console.error(error.message);
  });

//Activity 1 end

//Activity 2: Chaining Promises

//Task 3: Create a squence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from server 1");
      }, 1000);
    });
  }
  
  function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from server 2");
      }, 2000);
    });
  }
  
  function fetchData3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from server 3");
      }, 1500);
    });
  }
  
  fetchData1()
    .then((data1) => {
      console.log(data1); // Logs "Data from server 1" after 1 second
      return fetchData2();
    })
    .then((data2) => {
      console.log(data2); // Logs "Data from server 2" after 3 seconds (1s + 2s)
      return fetchData3();
    })
    .then((data3) => {
      console.log(data3); // Logs "Data from server 3" after 4.5 seconds (1s + 2s + 1.5s)
    })
    .catch((error) => {
      console.error(error.message);
    });

//Activity 2 end 

//Activity 3: Using Async/Await

//Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

async function logResolvedValue() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Resolved value after 2 seconds");
      }, 2000);
    });
  
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  logResolvedValue();

//Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

async function handleRejectedPromise() {
    const promise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("This is the error message after 2 seconds"));
      }, 2000);
    });
  
    try {
      const result = await promise;
      console.log(result);  // This line won't execute because the promise rejects
    } catch (error) {
      console.error(error.message);  // Logs the error message
    }
  }
  
  handleRejectedPromise();

//Activity 3 end

//Activity 4: Fetching Data from an API

//Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  fetchData();

//Activity 4 end

//Activity 5: Concurrent Promises

//Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

function promise1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise 1 resolved after 1 second");
      }, 1000);
    });
  }
  
  function promise2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise 2 resolved after 2 seconds");
      }, 2000);
    });
  }
  
  function promise3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise 3 resolved after 3 seconds");
      }, 3000);
    });
  }
  
  Promise.all([promise1(), promise2(), promise3()])
    .then((values) => {
      console.log(values);  // Logs an array of resolved values: ["Promise 1 resolved after 1 second", "Promise 2 resolved after 2 seconds", "Promise 3 resolved after 3 seconds"]
    })
    .catch((error) => {
      console.error("One of the promises rejected:", error);
    });

//Task 9: Use Promise.race to log the value of the first promise that resolve among multiple promises.

function promise1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise 1 resolved after 1 second");
      }, 1000);
    });
  }
  
  function promise2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise 2 resolved after 2 seconds");
      }, 2000);
    });
  }
  
  function promise3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promise 3 resolved after 3 seconds");
      }, 3000);
    });
  }
  
  Promise.race([promise1(), promise2(), promise3()])
    .then((value) => {
      console.log(value);  // Logs the value of the first resolved promise: "Promise 1 resolved after 1 second"
    })
    .catch((error) => {
      console.error("One of the promises rejected:", error);
    });
//Task 


