//Activity 1: Add Two Numbers

//Task 1: Solve the "Add Two Numbers" problems on LeetCode.
//Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
//and each node contains a single digit. Add the two numbers and return the sum as a linked list.
//Create a few test cases with linked lists and log the sum as a linked list.

// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to add two numbers represented by linked lists.
function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if (carry > 0) {
        curr.next = new ListNode(carry);
    }

    return dummyHead.next;
}

// Helper function to create a linked list from an array.
function createLinkedList(arr) {
    let dummyHead = new ListNode(0);
    let curr = dummyHead;

    arr.forEach(num => {
        curr.next = new ListNode(num);
        curr = curr.next;
    });

    return dummyHead.next;
}

// Helper function to print linked list as an array.
function printLinkedList(list) {
    let arr = [];
    while (list !== null) {
        arr.push(list.val);
        list = list.next;
    }
    console.log(arr);
}

// Test cases
let l1 = createLinkedList([2, 4, 3]); // represents the number 342
let l2 = createLinkedList([5, 6, 4]); // represents the number 465

let result = addTwoNumbers(l1, l2);
printLinkedList(result); // should print [7, 0, 8] which represents the number 807

// Additional test case
l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
result = addTwoNumbers(l1, l2);
printLinkedList(result); // should print [8, 9, 9, 9, 0, 0, 0, 1]

l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
result = addTwoNumbers(l1, l2);
printLinkedList(result); // should print [0]