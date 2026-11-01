---
name: hint
description: Use when the user is stuck on a problem in this practice repo and wants help moving forward, such as a hint, a nudge or a direction check, without asking for the solution.
argument-hint: "[problem file or name]"
---

# One hint

Give exactly **one** rung of the ladder from `AGENTS.md`, then stop.

1. Find the current rung: look back in this conversation for hints already
   given on this problem. None yet → rung 1. Otherwise go up one rung.
   - Rung 1: one question that points at the gap, using the user's own
     variable names or the first example's real values.
   - Rung 2: name the concept only ("this is a two pointers problem", "a
     hash map helps here").
   - Rung 3: the approach in words or pseudocode. No runnable code.
   - Rung 4 (code) only after an explicit "show me the solution". Hand off to
     the solution rules in `AGENTS.md`.
2. If the user has written code, read it first and aim the hint at the gap in
   *their* attempt, not at the textbook approach.
3. Reply with the hint and one line: "Ask for the next hint if you're still
   stuck." Nothing else: no complexity, no example solution, no "the trick is".
