//Activity 3: Trapping Rain Water

//Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
//Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1,
//and computes how much water it can trap after raining.
function trap(height) {
    if (height.length === 0) return 0;
  
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;
  
    while (left < right) {
      if (height[left] < height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          totalWater += leftMax - height[left];
        }
        left++;
      } else {
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          totalWater += rightMax - height[right];
        }
        right--;
      }
    }
  
    return totalWater;
  }
  
  // Test cases
  const testCases = [
    [0,1,0,2,1,0,1,3,2,1,2,1], // Expected output: 6
    [4,2,0,3,2,5],             // Expected output: 9
    [1,0,2,1,0,1,3],           // Expected output: 4
    [0,0,0,0],                 // Expected output: 0
    [1,2,3,4,5],               // Expected output: 0
  ];
  
  testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}: ${trap(testCase)}`);
  });