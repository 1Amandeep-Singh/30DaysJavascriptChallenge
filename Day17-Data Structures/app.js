//Activity 1: Linked List

//Task 1: Implement a Node class to represent an element in a linked list with properties value and next

class Node {
  constructor(value) {
    this.value = value; // The value stored in the node
    this.next = null; // The reference to the next node in the list, initially set to null
  }
}

// Example usage:
const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;

console.log(node1.value); // Output: 1
console.log(node1.next.value); // Output: 2

//Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to add a node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Method to remove a node from the end of the list
  removeLast() {
    if (this.head === null) {
      console.log("The list is empty.");
      return;
    }

    if (this.head.next === null) {
      this.head = null;
    } else {
      let current = this.head;
      let previous = null;
      while (current.next !== null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    }
  }

  // Method to display all nodes in the list
  display() {
    if (this.head === null) {
      console.log("The list is empty.");
      return;
    }

    let current = this.head;
    let listString = "";
    while (current !== null) {
      listString += current.value + " -> ";
      current = current.next;
    }
    listString += "null";
    console.log(listString);
  }
}

// Example usage:
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.display(); // Output: 10 -> 20 -> 30 -> null

list.removeLast();
list.display(); // Output: 10 -> 20 -> null

//Activity 1 end

//Activity 2: Stack

//Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack {
  constructor() {
    this.items = [];
  }

  // Method to add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Method to remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
      return null;
    }
    return this.items.pop();
  }

  // Method to view the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty.");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30

console.log(stack.pop()); // Output: 20

console.log(stack.pop()); // Output: 10


//Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

// Function to reverse a string using the Stack class
function reverseString(str) {
    const stack = new Stack();
  
    // Push all characters of the string onto the stack
    for (let char of str) {
      stack.push(char);
    }
  
    // Pop all characters from the stack to form the reversed string
    let reversedStr = '';
    while (!stack.isEmpty()) {
      reversedStr += stack.pop();
    }
  
    return reversedStr;
  }
  
  // Example usage:
  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);
  
  console.log("Original String: ", originalString); // Output: Hello, World!
  console.log("Reversed String: ", reversedString); // Output: !dlroW ,olleH


//Activity 3: Queue

//Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue {
    constructor() {
      this.items = [];
    }
  
    // Method to add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Method to remove and return the front element from the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty.");
        return null;
      }
      return this.items.shift(); // Remove the first element
    }
  
    // Method to view the front element of the queue without removing it
    front() {
      if (this.isEmpty()) {
        console.log("Queue is empty.");
        return null;
      }
      return this.items[0]; // Return the first element
    }
  
    // Method to check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Method to display all elements in the queue
    display() {
      if (this.isEmpty()) {
        console.log("Queue is empty.");
      } else {
        console.log("Queue elements: ", this.items);
      }
    }
  }
  
  // Example usage:
  const queue = new Queue();
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.display(); // Output: Queue elements:  [10, 20, 30]
  
  console.log(queue.front()); // Output: 10
  
  console.log(queue.dequeue()); // Output: 10
  queue.display(); // Output: Queue elements:  [20, 30]
  
  console.log(queue.dequeue()); // Output: 20
  queue.display(); // Output: Queue elements:  [30]
  
  console.log(queue.dequeue()); // Output: 30
  queue.display(); // Output: Queue is empty.
  
  console.log(queue.dequeue()); // Output: Queue is empty. Null

//Task 6: Use the Queue class to stimulate a simple printer queue where print jobs are added to the queue processed in order.

// Simulate a Printer Queue
class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    // Add a print job to the queue
    addJob(job) {
      console.log(`Adding job to queue: ${job}`);
      this.queue.enqueue(job);
    }
  
    // Process the next job in the queue
    processJob() {
      if (this.queue.isEmpty()) {
        console.log("No jobs to process.");
        return;
      }
  
      const job = this.queue.dequeue();
      console.log(`Processing job: ${job}`);
    }
  
    // View the next job to be processed
    viewNextJob() {
      if (this.queue.isEmpty()) {
        console.log("No jobs in queue.");
        return;
      }
  
      const nextJob = this.queue.front();
      console.log(`Next job to process: ${nextJob}`);
    }
  
    // Display all jobs in the queue
    displayQueue() {
      this.queue.display();
    }
  }
  
  // Example usage:
  const printerQueue = new PrinterQueue();
  
  printerQueue.addJob("Print Document 1");
  printerQueue.addJob("Print Document 2");
  printerQueue.addJob("Print Document 3");
  
  printerQueue.displayQueue(); // Output: Queue elements:  ['Print Document 1', 'Print Document 2', 'Print Document 3']
  
  printerQueue.viewNextJob(); // Output: Next job to process: Print Document 1
  
  printerQueue.processJob(); // Output: Processing job: Print Document 1
  printerQueue.displayQueue(); // Output: Queue elements:  ['Print Document 2', 'Print Document 3']
  
  printerQueue.processJob(); // Output: Processing job: Print Document 2
  printerQueue.displayQueue(); // Output: Queue elements:  ['Print Document 3']
  
  printerQueue.processJob(); // Output: Processing job: Print Document 3
  printerQueue.displayQueue(); // Output: Queue is empty.
  
  printerQueue.processJob(); // Output: No jobs to process.

//Activity 3 end

//Activity 4: Binary Tree

//Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode {
    constructor(value) {
      this.value = value;  // The value stored in the node
      this.left = null;    // The left child node, initially set to null
      this.right = null;   // The right child node, initially set to null
    }
  }
  
  // Example usage:
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  
  console.log(root);

//Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
    constructor() {
      this.root = null;  // The root of the tree, initially set to null
    }
  
    // Method to insert a value into the binary tree
    insert(value) {
      const newNode = new TreeNode(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Helper method to recursively find the correct place for the new node
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // Method to perform in-order traversal and display nodes
    inOrderTraversal(node = this.root) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    }
  }
  
  // Example usage:
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(18);
  
  console.log("In-order Traversal:");
  tree.inOrderTraversal();  // Output: 3 5 7 10 12 15 18

//Activity 4 end

//Activity 5: Graph (Optional)

//Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS)

//Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
