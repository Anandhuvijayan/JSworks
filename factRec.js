// program to find the factorial of a number
function factorial(x) {
  // if number is 0
  if (x == 0) {
    return 1;
  }

  else {
    return x * factorial(x - 1);
  }
}
const num = prompt("Enter a positive number: ");

if (num >= 0) {
  const result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
} else {
  console.log("Enter a positive number.");
}
