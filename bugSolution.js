function myFunc() {
  const args = Array.from(arguments);
  console.log(args.map(arg => arg * 2)); // Correctly uses map
}

myFunc(1, 2, 3); // Output: [2, 4, 6]