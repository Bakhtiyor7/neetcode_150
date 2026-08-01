class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        let sArr = s.split("");
        let tArr = t.split("");

        sArr.sort()
        tArr.sort()

        for (let i = 0; i < sArr.length; i++) {
            if (sArr[i] !== tArr[i]) {
                return false
            }
        }
        return true

        // if same return true, else false
        
    }
}

const solution = new Solution();
console.log(solution.isAnagram("carrace", "racecar")); // true
console.log(solution.isAnagram("apple", "banana")); // false
console.log(solution.isAnagram("donut", "nutdone")); // false
