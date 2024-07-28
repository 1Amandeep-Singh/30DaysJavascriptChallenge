//Activity 1: Basic Recursion

//Task 1: Write a recursive function to calculate the factorial of a number.
//Log the result for a few test cases.

function factorial(num) {
  if (num > 1) return num * factorial(num - 1);
  else return 1;
}
let y = factorial(5);

console.log(`The factorial of 5 is ${y}`);

//Task 2: Write a recursive function to calculate the nth Fibonacci number.
//Log the result for a few test cases.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let x = fibonacci(5);

console.log(`The fibonacci number is ${x}`);

//Activity 1 end

//Activity 2: Recursion with Arrays

//Task 3: Write a recursive function to find the sum of all the elements in an array.
//Log the result for a few test cases.

function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumArray(arr.slice(1));
    }
}

// Testing the function with a few test cases
const testCases = [
    [],
    [1],
    [1, 2, 3],
    [10, -2, 5, 3],
    [100, 200, 300, 400, 500]
];

testCases.forEach(arr => {
    console.log(`sumArray([${arr}]) = ${sumArray(arr)}`);
});

//Task 4: Write a recursive function to find the maximum element in an array.
//Log the result for a few test cases.

function findMax(arr, n = arr.length) {
    // Base case: If the array has only one element
    if (n === 1) {
        return arr[0];
    }

    // Recursive case: Compare the last element with the maximum of the rest
    return Math.max(arr[n - 1], findMax(arr, n - 1));
}

// Testing the function with a few test cases
const Cases = [
    [3, 1, 4, 1, 5, 9, 2, 6, 5],
    [10, 20, 30, 40, 50],
    [-1, -2, -3, -4, -5],
    [0],
    [7, 7, 7, 7, 7]
];

Cases.forEach(arr => {
    console.log(`The maximum element in [${arr}] is ${findMax(arr)}`);
});

//Activity 2 end

//Activity 3: String Manipulation with Recursion

//Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str) {
    // Base case: if the string is empty or has only one character, return it
    if (str.length <= 1) {
        return str;
    }

    // Recursive case: call reverseString on the substring excluding the first character,
    // then add the first character to the end of the reversed substring
    return reverseString(str.slice(1)) + str[0];
}

// Testing the function with a few test cases
const useCases = [
    "hello",
    "world",
    "racecar",
    "JavaScript",
    "123456789"
];

useCases.forEach(str => {
    console.log(`reverseString("${str}") = "${reverseString(str)}"`);
});

//Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str) {
    // Base case: if the string is empty or has one character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Check the first and last characters for equality
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursive case: Check the substring excluding the first and last characters
    return isPalindrome(str.slice(1, -1));
}

// Testing the function with a few test cases
const testCase = [
    "racecar",    // true
    "hello",      // false
    "madam",      // true
    "step on no pets", // true
    "1234321",    // true
    "12345"       // false
];

testCase.forEach(str => {
    console.log(`isPalindrome("${str}") = ${isPalindrome(str)}`);
});

//Activity 3 end

//Activity 4: Recursive Search

//Task 7: Write a recursive function to perform a binary search on a sorted array.
//Log the index of the target element for a few test cases.

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the range is invalid, the target is not found
    if (left > right) {
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the target is at the middle index
    if (arr[mid] === target) {
        return mid;
    }

    // If the target is less than the middle element, search in the left half
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    }

    // If the target is greater than the middle element, search in the right half
    return binarySearch(arr, target, mid + 1, right);
}

// Testing the function with a few test cases
const testinput = [
    { array: [1, 2, 3, 4, 5], target: 3 },    // index 2
    { array: [10, 20, 30, 40, 50], target: 25 }, // -1 (not found)
    { array: [10, 20, 30, 40, 50], target: 50 }, // index 4
    { array: [5, 10, 15, 20, 25, 30, 35], target: 5 }, // index 0
    { array: [1, 3, 5, 7, 9, 11, 13], target: 11 } // index 5
];

testinput.forEach(({ array, target }) => {
    console.log(`binarySearch(${array}, ${target}) = ${binarySearch(array, target)}`);
});

//Task 8: Write a recursive function to count the occurrences of a target element in an array.
//Log the result for a few test cases.

function countOccurrences(arr, target, index = 0) {
    // Base case: if the index is out of bounds, return 0
    if (index >= arr.length) {
        return 0;
    }

    // Check if the current element matches the target
    const countForThisElement = (arr[index] === target) ? 1 : 0;

    // Recursive case: count the target in the rest of the array
    return countForThisElement + countOccurrences(arr, target, index + 1);
}

// Testing the function with a few test cases
const testArr = [
    { array: [1, 2, 3, 4, 5, 3, 3], target: 3 },    // 3 occurrences
    { array: [10, 20, 30, 40, 50], target: 25 }, // 0 occurrences
    { array: [5, 5, 5, 5, 5], target: 5 }, // 5 occurrences
    { array: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4], target: 4 }, // 4 occurrences
    { array: [], target: 7 } // 0 occurrences
];

testArr.forEach(({ array, target }) => {
    console.log(`countOccurrences(${array}, ${target}) = ${countOccurrences(array, target)}`);
});

//Activity 4 end

//Activity 5: Tree Traversal (Optional)

//Task 9: Write a recursive function to perform an in-order traversal of a binary tree.
//Log the nodes as they are visited.

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(root) {
    if (root === null) {
        return;
    }

    // Recursively visit the left subtree
    inOrderTraversal(root.left);

    // Visit the current node
    console.log(root.value);

    // Recursively visit the right subtree
    inOrderTraversal(root.right);


    
}

// Creating a binary tree for testing
const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3,
        new TreeNode(6),
        new TreeNode(7)
    )
);

// Performing in-order traversal and logging the nodes
console.log("In-order traversal of the binary tree:");
inOrderTraversal(root);

//Task 10: Write a recursive function to calculate the depth of a binary tree.
//Log the result for a few test cases.

function calculateDepth(root) {
    // Base case: if the node is null, return 0 (an empty tree has depth 0)
    if (root === null) {
        return 0;
    }

    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = calculateDepth(root.left);
    const rightDepth = calculateDepth(root.right);

    // The depth of the tree is the greater of the two subtrees' depths plus one for the root
    return Math.max(leftDepth, rightDepth) + 1;
}

// Testing the function with a few test cases
const testCase1 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);

const testCase2 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(3,
            new TreeNode(4)
        )
    )
);

const testCase3 = null; // An empty tree

console.log("Depth of testCase1:", calculateDepth(testCase1)); // Should log 3
console.log("Depth of testCase2:", calculateDepth(testCase2)); // Should log 4
console.log("Depth of testCase3:", calculateDepth(testCase3)); // Should log 0

//Activity 5 end
