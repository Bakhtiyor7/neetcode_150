---
name: check-solution
description: Use when the user wants their own solution in this practice repo checked or reviewed, whether it is finished code in a file, code pasted into chat, or a partial attempt they want feedback on.
argument-hint: "[path/to/problem.js]"
---

# Check my solution

Review the user's own code against the "Reviewing my code" rules in
`AGENTS.md`. Evidence comes from running it, not from reading it.

## Steps

1. **Read** the file (`$ARGUMENTS`, the open file, or the pasted code). If
   the method is empty or half-written, this is an "am I on the right track"
   check: say what's right and what's off, then give **one** hint question
   (rung 1 of the ladder) and stop. Do not write the missing code.
2. **Run it.** `node <file>` for the file's own examples. Then run 4–6 edge
   cases against the class without editing the file: load it in
   `node -e` (strip everything from `const solution` down, `eval` the rest,
   then `new Solution()`), or copy pasted code into the scratchpad. Pick
   cases from the constraints and the input type:
   - Any input: the smallest allowed size, the largest or extreme values.
   - Arrays and numbers: duplicates, all equal, sorted, reverse sorted,
     negatives and zero if allowed.
   - Strings: one character, all the same character, the case or character
     rules in the constraints.
   - Linked lists and trees: one node, a list or tree that leans fully to one
     side.
   - Problems with a target or `k`: no valid answer, the answer at the very
     start or end.
3. **Answer in this order:**
   - **Verdict:** correct / incorrect. If incorrect, the smallest failing
     input, what it returned, what it should return, and the line at fault.
   - **Evidence:** a table of input → output → why that's right.
   - **Complexity:** time and space, naming the line that drives each. Say
     whether the bottom comments are right.
   - **Real problems only:** bugs, edge cases, dead code, and comments in
     the file that state something false. No style nitpicks, no praise.
   - A better approach **by name only**, if one exists.
4. **If correct**, suggest the commit message in the repo style:
   `feat: (<topic>) <problem name> solved`. Don't commit unless asked.

Never edit the user's solution file. Never "fix" it unless they ask.
