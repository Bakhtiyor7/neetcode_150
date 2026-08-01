class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    let count = new Map();

    for (let i = 0; i < s.length; i++) {
      count.set(s[i], (count.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
      if (!count.get(t[i])) {
        return false;
      }
      count.set(t[i], count.get(t[i]) - 1);
    }

    return true;
  }
}

// Time complexity : O(n);
// Space complexity : O(1); // map size capped by fixed alphabet size

const solution = new Solution();
console.log(solution.isAnagram("anagram", "nagaram")); // true
console.log(solution.isAnagram("rat", "car")); // false
