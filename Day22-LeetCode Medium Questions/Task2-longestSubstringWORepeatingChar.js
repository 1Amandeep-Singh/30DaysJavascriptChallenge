//Activity 2: Longest Substring Without Repeating Characters

//Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
//Write a function that takes a string and returns the length of the longest substring without repeating characters.
//Log the result for a few test cases, including edge cases.
function lengthOfLongestSubstring(s) {
    let n = s.length;
    let maxLength = 0;
    let map = new Map(); // To store the last index of each character
    let left = 0; // Left end of the sliding window

    for (let right = 0; right < n; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left); // Move the left end of the window
        }
        map.set(s[right], right); // Update the last index of the character
        maxLength = Math.max(maxLength, right - left + 1); // Update the max length
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke")
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring(" ")); // Output: 1 (" ")
console.log(lengthOfLongestSubstring("au")); // Output: 2 ("au")
console.log(lengthOfLongestSubstring("dvdf")); // Output: 3 ("vdf")