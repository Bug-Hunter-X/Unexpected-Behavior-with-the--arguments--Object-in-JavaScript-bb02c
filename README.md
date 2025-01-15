# Unexpected Behavior with the `arguments` Object

This repository demonstrates a common, yet often overlooked, issue in JavaScript related to the `arguments` object.  The `arguments` object, available inside functions, provides access to the function's arguments.  However, it's *not* a true array, and using it as such can result in unexpected behavior.

## The Bug

The `bug.js` file contains a function that attempts to use array methods on the `arguments` object.  This leads to incorrect results because `arguments` does not directly support methods like `forEach`, `map`, `filter`, etc.

## The Solution

The `bugSolution.js` file shows how to correctly handle function arguments by converting the `arguments` object into a proper array using techniques like `Array.from` or spread syntax (`...`).  This ensures that array methods can be used correctly.