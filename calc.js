const operator = prompt("select the operator '+','-','*','/'");
let a = prompt("enter the first number");
let b = prompt("enter the second number");

let result;
if (operator == "+") {
  result = a + b;
} else if (operator == "-") {
  result = a - b;
} else if (operator == "*") {
  result = a * b;
} else {
  result = a / b;
}

console.log(`${a} ${operator} ${b} = ${result}`);
