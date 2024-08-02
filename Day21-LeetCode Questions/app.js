//Activity 1: Two Sum

//Task 1: Solve the "Two Sum" problem on LeetCode.
//Write a function that takes an array of number and a target number, and returns the indices of the two numbers that add up to the target.
//Log the indices for a few test cases.
function chkPair(A , size , x) {
    
    for (i = 0; i < (size - 1); i++) {
        for (j = (i + 1); j < size; j++) {
 
            if (A[i] + A[j] == x) {
                console.log("Pair with a given sum " + x + " is (" + A[i] + ", " + A[j] + ")");

                return true;
            }
        }
    }

    return false;
}

    let A = [4,5,11,35];
    let x = 9;
    let size = A.length;

    // let A = [3,4,2];
    // let x = 6;
    // let size = A.length;
    // let A = [1,5];
    // let x = 6;
    // let size = A.length;
    // let A = [1, 2, 3, 4, 5];
    // let x = 8;
    // let size = A.length;

    if (chkPair(A, size, x)) {
        console.log("Valid pair exists");
    }
    else {
        console.log("No valid pair exists for " + x);
    }

//Activity 1 end

//Activity 2: Reverse Integer

//Task 2: Solve the "Reverse Integer" problem on LeetCode.
//Write a function that takes an integer anad returns it with its digits reversed.
//Handle edge cases like negative numbers and numbers ending with zero.
//Log the reversed integfers for a few test cases.

function reverseInteger(x) {
    let reversed = 0;
    let sign = Math.sign(x);
    x = Math.abs(x);

    while (x !== 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    reversed *= sign;

    // Handle 32-bit overflow
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }

    return reversed;
}

// Test cases
let test1 = reverseInteger(123);
console.log(test1); // 321

let test2 = reverseInteger(-123);
console.log(test2); // -321

let test3 = reverseInteger(120);
console.log(test3); // 21

let test4 = reverseInteger(0);
console.log(test4); // 0

let test5 = reverseInteger(1534236469); // Beyond 32-bit signed integer range when reversed
console.log(test5); // 0


//Activity 2 end

//Activity 3: Palindrome Number

//Task 3: Solve the "Palindrome Number" problem on LeetCode.
//Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
//Log the result for a few test cases, including edge cases like negative numbers.

function isPalindrome(x) {
    // Negative numbers and numbers that end with 0 but are not 0 themselves are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    let original = x;

    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    return reversed === original;
}

// Test cases
let Test1 = isPalindrome(121);
console.log(test1); // true

let Test2 = isPalindrome(-121);
console.log(test2); // false

let Test3 = isPalindrome(10);
console.log(test3); // false

let Test4 = isPalindrome(0);
console.log(test4); // true

let Test5 = isPalindrome(12321);
console.log(test5); // true

//Activity 3 end

//Activity 4: Merge Two Sorted Lists

//Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
//Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
//Create a few test cases with linked lists and log the merged list.

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if (l1 !== null) {
        current.next = l1;
    }

    if (l2 !== null) {
        current.next = l2;
    }

    return dummy.next;
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
}

// Helper function to print a linked list
function printLinkedList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

// Test cases
let l1 = createLinkedList([1, 2, 4]);
let l2 = createLinkedList([1, 3, 4]);

let mergedList = mergeTwoLists(l1, l2);
printLinkedList(mergedList); // [1, 1, 2, 3, 4, 4]

let l3 = createLinkedList([]);
let l4 = createLinkedList([]);

let mergedList2 = mergeTwoLists(l3, l4);
printLinkedList(mergedList2); // []

let l5 = createLinkedList([]);
let l6 = createLinkedList([0]);

let mergedList3 = mergeTwoLists(l5, l6);
printLinkedList(mergedList3); // [0]

//Activity 4 end

//Activity 5: Valid Parentheses

//Task 5: Solve the "Valid Parentheses" problem on LeetCode.
//Write a function that takes a string containing just the characters '(',')', '{','}', '[' and ']', and determines if the input string is valid.
//A string is valid if open brackets are closed in the correct order.

function isValid(s) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("")); // true

//Activity 5 end