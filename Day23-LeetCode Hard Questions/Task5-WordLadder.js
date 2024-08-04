//Activity 5: Word Ladder

//Task 5: Solve the "Word Ladder" problem on LeetCode.
//Write a function that takes a begin word, an end word, and a dicionary of words, and finds the length of the shortest
//tansformation sequnce from the begin to the end word, such that only one letter can be changed at a time
//and each transformed word must exist in the word list.
//Log the length of the shortest transformation sequence for a few test cases.
function wordLadder(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
  
    const queue = [[beginWord, 1]]; // Queue holds pairs of [word, length]
    const visited = new Set();
    visited.add(beginWord);
  
    while (queue.length > 0) {
      const [currentWord, length] = queue.shift();
      
      if (currentWord === endWord) return length;
  
      for (let i = 0; i < currentWord.length; i++) {
        for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode++) {
          const newChar = String.fromCharCode(charCode);
          const newWord = currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);
          
          if (wordSet.has(newWord) && !visited.has(newWord)) {
            visited.add(newWord);
            queue.push([newWord, length + 1]);
          }
        }
      }
    }
    
    return 0;
  }
  
  // Helper function to log the result
  function logShortestTransformation(beginWord, endWord, wordList) {
    const length = wordLadder(beginWord, endWord, wordList);
    console.log(`Shortest transformation length from "${beginWord}" to "${endWord}": ${length}`);
  }
  
  // Test cases
  const testCases = [
    ["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]], // Expected output: 5
    ["hit", "cog", ["hot", "dot", "dog", "lot", "log"]], // Expected output: 0 (no path to "cog")
    ["a", "c", ["a", "b", "c"]], // Expected output: 2
    ["a", "b", ["b"]], // Expected output: 2
    ["a", "z", ["b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]] // Expected output: 2
  ];
  
  testCases.forEach(([beginWord, endWord, wordList], index) => {
    console.log(`Test Case ${index + 1}:`);
    logShortestTransformation(beginWord, endWord, wordList);
  });
  