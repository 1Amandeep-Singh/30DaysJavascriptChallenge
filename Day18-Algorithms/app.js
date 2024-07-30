//Activity 1: Sorting Algorithm

//Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order.
//Log the sorted array.

function bubbleSort(arr) {
    let n = arr.length;
    // Outer loop to go through the entire array
    for (let i = 0; i < n - 1; i++) {
        // Inner loop for each pass of bubble sort
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage
let array = [64, 34, 25, 12, 22, 11, 90];
let bubblesortedArray = bubbleSort(array);
console.log("Sorted array:", bubblesortedArray);

//Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order.
//Log the sorted array.

function selectionSort(arr) {
    let n = arr.length;

    // One by one move boundary of unsorted subarray
    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in unsorted array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage
let arr = [64, 25, 12, 22, 11];
let selectionsortedArray = selectionSort(array);
console.log("Sorted array:", selectionsortedArray);

//Task 3: Implemented the quick sort algorithm to sort an array of numbers in ascending order.
//Log the sorted array.

function quickSort(arr) {
    // Base case: arrays with fewer than 2 elements are already sorted
    if (arr.length < 2) {
        return arr;
    }

    // Choose a pivot element from the array (using the first element here)
    let pivot = arr[0];
    let left = [];
    let right = [];

    // Partition the array into two halves: less than pivot and greater than or equal to pivot
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively apply quickSort to the left and right halves, and concatenate the results
    return quickSort(left).concat(pivot, quickSort(right));
}

// Example usage
let Arr = [10, 7, 8, 9, 1, 5];
let quicksortedArray = quickSort(Arr);
console.log("Sorted array:", quicksortedArray);

//Activity 1 end

//Activity 2: Searching Algorithms

//Task 4: Implement the linear search algorithm to find a target value in an array.
//Log the index of the target value.

function linearSearch(arr, target) {
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element matches the target
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if the target is not found
}

// Example usage
let inputarr = [2, 4, 6, 8, 10];
let targetValue = 8;
let index = linearSearch(inputarr, targetValue);
console.log("Index of the target value:", index); // Outputs: Index of the target value: 3

//Task 5: Implement the binary search to find a target value in a sorted array.
//Log the index of the target value.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found, return the index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found, return -1
}

// Example usage
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let targetVal = 7;
let idx = binarySearch(sortedArray, targetVal);
console.log("Index of the target value:", idx); // Outputs: Index of the target value: 6

//Activity 2 end

//Activity 3: String Algorithms

//Task 6: Write a function to count the occurrences of each character in a string.
//Log the character counts.

function countCharacterOccurrences(str) {
    // Initialize an empty object to store character counts
    let charCount = {};

    // Loop through each character in the string
    for (let char of str) {
        // If the character is already in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // Otherwise, add the character to the object with a count of 1
            charCount[char] = 1;
        }
    }

    // Log the character counts
    for (let char in charCount) {
        console.log(`Character: ${char}, Count: ${charCount[char]}`);
    }
}

// Example usage
let inputString = "hello world";
countCharacterOccurrences(inputString);

//Task 7: Write a function to find the longest substring without repeating characters in a string.
//Log the length of the substring.

function longestUniqueSubstringLength(str) {
    let maxLength = 0; // Stores the maximum length found
    let start = 0; // Start of the current window
    let charIndexMap = {}; // Maps characters to their latest index

    for (let end = 0; end < str.length; end++) {
        let char = str[end];

        // If the character is already in the map and within the current window, move the start
        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }

        // Update the latest index of the character
        charIndexMap[char] = end;

        // Calculate the current window length and update the maximum length if needed
        maxLength = Math.max(maxLength, end - start + 1);
    }

    console.log("Length of the longest substring without repeating characters:", maxLength);
    return maxLength;
}

// Example usage
let inputval = "abcabcbb";
longestUniqueSubstringLength(inputval);

//Activity 3 end

//Activity 4: Array Algorithms

//Task 8: Write a function to rotate an array by k positions.
//Log the rotated array

function rotateArray(arr, k) {
    let n = arr.length;
    // Ensure k is within the bounds of the array length
    k = k % n;

    // Function to reverse a portion of the array
    function reverse(array, start, end) {
        while (start < end) {
            let temp = array[start];
            array[start] = array[end];
            array[end] = temp;
            start++;
            end--;
        }
    }

    // Step 1: Reverse the entire array
    reverse(arr, 0, n - 1);

    // Step 2: Reverse the first k elements
    reverse(arr, 0, k - 1);

    // Step 3: Reverse the remaining n - k elements
    reverse(arr, k, n - 1);

    // Log the rotated array
    console.log("Rotated array:", arr);
    return arr;
}

// Example usage
let inputarray = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotateArray(inputarray, k); // Output: Rotated array: [5, 6, 7, 1, 2, 3, 4]

//Task 9: Write a function to merge two sorted arrays into one sorted array.
//Log the merged array

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    // Loop through both arrays until one of them is fully processed
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add the remaining elements from arr1, if any
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add the remaining elements from arr2, if any
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    // Log the merged array
    console.log("Merged array:", mergedArray);
    return mergedArray;
}

// Example usage
let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];
mergeSortedArrays(array1, array2); // Output: Merged array: [1, 2, 3, 4, 5, 6, 7, 8]

//Activity 4 end

//Activity 5: Dynamic Programming (Optional)

//Task 10: Write a function to solve the Fibonacci sequence using dynamic programming.
//Log the Fibonacci numbers.

//Task 11: Write a function to solve the knapsack problem using dynamic programming.
//Log the maximum value that can be obtained.

//Activity 5 end