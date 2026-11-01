---
name: new-problem
description: Use when the user shares a NeetCode or LeetCode problem URL or name and wants a template, starter file, or scaffold for it in this repo.
argument-hint: "<neetcode-or-leetcode-url>"
---

# New problem template

Create an empty, ready-to-solve file for one problem. **Never** put a solution,
hint, approach, or complexity in it.

## Steps

1. **Get the statement.** Fetch `$ARGUMENTS` (or the URL/name the user gave)
   and take only: title, difficulty, description, examples, constraints, and
   the JavaScript starter code. Never take editorial, hints or solutions.
   NeetCode renders its code editor client-side, so a plain fetch usually
   misses the starter code. Then use the LeetCode MCP if it is installed, or
   write the standard LeetCode signature and tell the user it was inferred.
2. **Pick the folder** from the problem's NeetCode topic. `ls` first and
   reuse a folder that already matches the topic (Arrays & Hashing is
   `array/`). Otherwise create one named after the topic in snake_case:
   Two Pointers → `two_pointers/`, Binary Search → `binary_search/`,
   Linked List → `linked_list/`.
3. **Name the file** after the method name in the starter code, in camelCase
   (`<methodName>.js`). If it already exists, stop and ask; never overwrite
   the user's work.
4. **Write the file** in this exact shape:

```js
// <Title> (<Difficulty>)
// <url>
//
// <description, wrapped at ~80 chars>
//
// Example 1:
//   Input: ...
//   Output: ...
//   Explanation: ...
//
// Constraints:
//   ...

class Solution {
  /**
   * @param {<type>} <param>
   * @return {<type>}
   */
  <methodName>(<params>) {}
}

// Time complexity : ;
// Space complexity : ;

const solution = new Solution();
console.log(solution.<methodName>(<example 1 input>)); // <example 1 output>
```

   Copy the JSDoc types and parameter names from the starter code. Write one
   `console.log` per example, with the expected output as a trailing comment.
   If the problem uses a class the starter code defines (`ListNode`,
   `TreeNode`), include that class above `Solution` and build the example
   inputs with it.

5. **Report** the path, the run command (`node <folder>/<file>.js`), and
   whether the starter signature came from the page or was inferred. Nothing
   about how to solve it.
