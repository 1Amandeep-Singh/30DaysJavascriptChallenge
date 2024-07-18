//Activity 1: Array Creation and Access

//Task 1: Create an array of number from 1 to 5 and log the array to the console
const arr = [];
arr.push("first", "second" , "third", "fourth", "fifth");
console.log(arr);

//Task 2: Access the first and last elements of the array and log them to the console.
console.log(arr[0]);

//Activity 1 end

//Activity 2: Array Methods (Basic)

//Task 3: Use the push method to add a new number to the end of the array and log the updated array
arr.push(2);
console.log("Add a new number to the end of the array : "+ arr);

//Task 4: Use the pop method to remove the last element from the array and log the updated array
arr.pop();
console.log("Remove the last element from the array : " + arr);

//Task 5: Use the shift method to remove the first element from the array and log the updated array
arr.shift();
console.log("Remove the first element from the array : " + arr);

//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array
arr.unshift("first");
console.log("Add a new number to the beginning of the array : " + arr);

//Activity 2 end

//Activity 3: Array Methods (Intermediate)

//Task 7: Use the map methods to create a new array where each number is doubled and log the new array
const numarray = [1,2,3,4,5];
const map = numarray.map((x)=>x*2)
console.log(map);

//Task 8: Use the filter method to create a new array with only even numbers and log the new array
const filtarr = numarray.filter((numarray)=>numarray%2 == 0);
console.log(filtarr);

//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result
const reducearr = numarray.reduce((accumulator,currentvalue) => accumulator+currentvalue,0,);
console.log(reducearr);

//Activity 3 end

//Activity 4: Array Iteration

//Task 10: Use a for loop to iterate over the array and log each elements to the console
for(let i=0;i<numarray.length;i++)
    console.log(numarray[i]);

//Task 11: Use the forEach method to iterate over the array and log each elements to the console
numarray.forEach(e => {
console.log(e);    
});

//Activity 4 end

//Activity 5: Multi-dimensional Arrays

//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix);

//Task 13: Access and log a specofic element from the two-dimensional array
console.log(matrix[1][2]);

//Activity 5 end