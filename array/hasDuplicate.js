class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const seen = new Set();
    // for loop that iterates each number
    for (let i = 0; i < nums.length; i++) {
      if (seen.has(nums[i])) {
        return true;
      } else {
        seen.add(nums[i]);
      } 
    }
    return false;
    // if number is in seen, return true
    // else add number to seen
    // return false
  }
}

// Time complexity : O(n);
// Space complexity : O(n);

const solution = new Solution();
console.log(solution.hasDuplicate([1, 2, 3, 4, 5]));
console.log(solution.hasDuplicate([1, 2, 3, 3, 4]));
console.log(solution.hasDuplicate([1, 2, 3, 4, 5, 5]));
console.log(solution.hasDuplicate([1, 2, 3, 4, 5]));
