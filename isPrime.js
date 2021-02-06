function prime(n) {
  if (n == 1) {
    console.log("prime number");
  } else if (n >= 1) {
    for (i = 1; i <= n; i++) {
      if (n % i == 0) {
        console.log("The number is prime");
      } else {
        console.log("The number is not prime");
      }
    }
  } else {
    console.log("please enter a postive number");
  }
}
prime(7);
