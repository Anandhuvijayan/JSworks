let root1, root2;

let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
let c = parseInt(prompt("Enter the third number"));

let d = Math.sqrt(b * b - 4 * a * c);
if (d > 0) {
  root1 = (-b + d) / (2 * a);
  root2 = (-b - d) / (2 * a);

  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
} else if (d == 0) {
  root1 = -b / (2 * a);

  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
} else {
  root1 = ((-b + d) / (2 * a)).toFixed(2);
  root2 = ((-b - d) / (2 * a)).toFixed(2);

  console.log(`the roots of quadratic equation are ${root1} and ${root2}`);
}
