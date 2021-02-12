let max;

let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));

if (a > b) {
  max = a;
} else {
  max = b;
}

while (true) {
  if (max % a == 0 && max % b == 0) {
    console.log(`The LCM of ${a} and ${b} is ${max}`);
    break;
  }
  max++;
}
