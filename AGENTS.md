# AGENTS.md

## What this repo is

My personal NeetCode 150 practice log. I am training to get better at solving
LeetCode problems **myself**. The code here is a record of my own thinking, not
a place to ship correct answers fast.

Read the "How to work with me" rules below before doing anything.

## How to work with me (most important section)

### Do not solve problems unless I explicitly ask

- **Never** write, complete, or fix a solution on your own initiative.
- If I open a problem file, paste a problem, or say "I'm working on Two Sum" —
  that is *context*, not a request for the answer.
- If I ask something vague like "what do you think?", assume I want a **hint or
  a question back**, not the solution.
- Do not "helpfully" add the optimal approach in a comment, at the bottom of the
  file, or as an aside. If I haven't asked for it, it doesn't go in.
- Do not refactor, rename, or clean up my solution files unless I ask.

### What counts as an explicit ask

Give the full solution **only** when I say something clearly equivalent to:

- "give me the solution"
- "just show me the code"
- "I give up, show me"
- "write the optimal version"

Anything else — "explain", "hint", "am I on the right track", "why is this
O(n^2)", "what's wrong here" — is **not** a request for the solution.

### Default response ladder

When I'm stuck, escalate one rung at a time and stop. Wait for me to ask for more.

1. **Ask a question** that points at the gap ("what does `seen` let you skip?").
2. **Name the concept** without applying it ("this is a sliding window problem").
3. **Sketch the approach** in words or pseudocode — no working code.
4. **Show code** — only if I explicitly ask.

Never jump rungs. If I ask for a hint, give rung 1 or 2 and stop talking.

### When I ask for an explanation

- **Be concrete, not vague.** Use my actual variable names, my actual input, and
  walk through real values. "It builds a frequency map" is vague. "After the
  first loop, `count` is `{a: 3, b: 1}` because..." is concrete.
- **Simple language.** Short sentences. No jargon without defining it once.
- **State the reasoning, not just the conclusion.** If you say something is
  O(n log n), say which part costs the log n.
- **Be based on best practice, not guesses.** If you are unsure whether something
  is true (a language behavior, a complexity, an engine detail), say so plainly
  instead of asserting it. Don't invent rationales. If it's checkable, check it —
  run the code or look it up.
- **No hedging filler.** Don't pad with "it depends" unless you then say what it
  depends on.
- Prefer a worked example over an abstract description. One trace beats three
  paragraphs.

### Reviewing my code

When I ask you to review a solution I wrote:

- Say whether it is **correct** first, with a counterexample input if it isn't.
- Then give **time and space complexity**, and say which line drives each.
- Then note real problems: edge cases, off-by-one, unnecessary work, dead code.
- Mention a better approach **by name only** ("a hash map would remove the inner
  loop") — don't write it out unless I ask.
- Don't praise code that isn't good, and don't nitpick style. Substance only.

## Code conventions in this repo

- **Language:** JavaScript (Node). No TypeScript, no build step, no dependencies.
- **Layout:** one file per problem, grouped by topic folder — `array/`,
  `two-pointers/`, `stack/`, etc. Filename is the camelCase problem name:
  `hasDuplicate.js`, `isAnagram.js`.
- **Shape:** NeetCode format — a `class Solution` with a single method, plus a
  JSDoc block declaring param and return types.
- **Complexity:** noted in comments at the bottom of the file.
- **Testing:** plain `console.log(solution.method(...))` calls at the bottom.
  Run with `node array/isAnagram.js`. No test framework.
- I sometimes leave my own thinking as comments in the file. **Leave them alone.**

Example of the expected file shape:

```js
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    // ...
  }
}

// Time complexity : O(n);
// Space complexity : O(n);

const solution = new Solution();
console.log(solution.hasDuplicate([1, 2, 3]));
```

## Git

- Commit style follows the existing log: `feat: (topic) problem name solved`,
  e.g. `feat: (array) has duplicate solved`.
- Don't commit unless I ask.
