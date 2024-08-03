//Activity 5: Group Anagrams

//Task 5: Solve the "Group Anagrams" problems on LeetCode.
//Write a function that takes an array of strings and groups anagrams together.
//Log the grouped anagrams for a few test cases.
function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        const sortedStr = str.split('').sort().join(''); // Sort the string to form the key
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []); // Initialize an array if the key does not exist
        }
        map.get(sortedStr).push(str); // Add the string to the corresponding key
    }

    return Array.from(map.values()); // Return the grouped anagrams
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams([""])); 
// Output: [[""]]

console.log(groupAnagrams(["a"])); 
// Output: [["a"]]

console.log(groupAnagrams(["cab", "pug", "pei", "nay", "ron", "rae", "ems", "ida", "mes"])); 
// Output: [["cab"], ["pug"], ["pei"], ["nay"], ["ron"], ["rae"], ["ems", "mes"], ["ida"]]

console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "yxz", "zxy"])); 
// Output: [["abc", "bca", "cab"], ["xyz", "yxz", "zxy"]]
