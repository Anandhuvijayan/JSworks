/* find the factorial of a number ussing recursive function*/
function fact(n) {
  if (n == 0) {
    return 1;
  } else {
    return (f = n * fact(n - 1));
  }
}

const n = prompt("Enter a positive number: ");

// calling factorial() if num is positive
if (n >= 0) {
  const result = fact(n);
  console.log(`The factorial of ${n} is ${result}`);
} else {
  console.log("Enter a positive number.");
}
