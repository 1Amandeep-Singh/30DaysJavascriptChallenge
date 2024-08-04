//Activity 2: Merge k Sorted Lists

//Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
//Write a function that takes an array of k linked lists, each linked lists is sorted in asecending order,
//merges all the linked lists into one sorted linked list.
//Create a few test cases with linked lists and log the merged list.
class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    push(node) {
      this.heap.push(node);
      this.heapifyUp();
    }
  
    pop() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return root;
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex].val <= this.heap[index].val) break;
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
      }
    }
  
    heapifyDown() {
      let index = 0;
      const length = this.heap.length;
      const element = this.heap[0];
      while (true) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let swap = null;
  
        if (leftChildIndex < length) {
          if (this.heap[leftChildIndex].val < element.val) {
            swap = leftChildIndex;
          }
        }
  
        if (rightChildIndex < length) {
          if ((swap === null && this.heap[rightChildIndex].val < element.val) ||
              (swap !== null && this.heap[rightChildIndex].val < this.heap[swap].val)) {
            swap = rightChildIndex;
          }
        }
  
        if (swap === null) break;
        this.heap[index] = this.heap[swap];
        this.heap[swap] = element;
        index = swap;
      }
    }
  
    size() {
      return this.heap.length;
    }
  }
  
  function mergeKLists(lists) {
    const minHeap = new MinHeap();
  
    // Initialize the heap with the first node of each list
    for (const list of lists) {
      if (list) {
        minHeap.push(list);
      }
    }
  
    // Dummy head to make the merged list operations easier
    const dummyHead = new ListNode();
    let current = dummyHead;
  
    while (minHeap.size() > 0) {
      const node = minHeap.pop();
      current.next = node;
      current = current.next;
      if (node.next) {
        minHeap.push(node.next);
      }
    }
  
    return dummyHead.next;
  }
  
  // Helper function to create a linked list from an array
  function createLinkedList(arr) {
    const dummyHead = new ListNode();
    let current = dummyHead;
    for (const val of arr) {
      current.next = new ListNode(val);
      current = current.next;
    }
    return dummyHead.next;
  }
  
  // Helper function to print the linked list
  function printLinkedList(head) {
    const result = [];
    let current = head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
  
  // Test cases
  const list1 = createLinkedList([1, 4, 5]);
  const list2 = createLinkedList([1, 3, 4]);
  const list3 = createLinkedList([2, 6]);
  
  const lists = [list1, list2, list3];
  const mergedList = mergeKLists(lists);
  
  printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6