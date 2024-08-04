//Activity 1: Median of Two Sorted Arrays

//Task 1: Solve the "Median of Two Sorted Arrays" problems on LeetCode.
//Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
//Log the median for a few test cases, including edge cases.
function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const x = nums1.length;
    const y = nums2.length;

    let low = 0;
    let high = x;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        const maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        const minX = (partitionX === x) ? Infinity : nums1[partitionX];

        const maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        const minY = (partitionY === y) ? Infinity : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted.");
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // Output: 0
console.log(findMedianSortedArrays([], [1])); // Output: 1
console.log(findMedianSortedArrays([2], [])); // Output: 2
console.log(findMedianSortedArrays([1, 3], [2, 7])); // Output: 2.5
console.log(findMedianSortedArrays([1, 2, 3, 4], [5, 6, 7, 8, 9])); // Output: 5

