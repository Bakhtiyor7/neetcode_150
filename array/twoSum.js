// ===> this is a brute force version with O(n log n) time
// class Solution {
//   /**
//    * @param {number[]} nums
//    * @param {number} target
//    * @return {number[]}
//    */
//   twoSum(nums, target) {
//     // for loop
//     // inner loop

//     // target = nums[i] + nums[j]
//     if (nums.length === 0 || null) {
//       return;
//     }

//     for (let i = 0; i < nums.length; i++) {
//       for (let j = 0; j < nums.length + 1; j++) {
//         if (nums[i] + nums[j] === target) {
//           return [nums.indexOf(nums[i]), nums.indexOf(nums[j])];
//         }
//       }
//     }
//     return;
//   }
// }

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      if (seen.has(complement)) {
        return [seen.get(complement), i];
      }

      seen.set(nums[i], i);
    }
  }
}

// Time complexity : O(n);
// Space complexity : O(n);

const solution = new Solution();
console.log(solution.twoSum([1, 2, 3, 4], 7)); // [2, 3]
