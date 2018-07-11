// Sum All Primes

/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {
  let sum = 0;
  let i;
  let j;

  for (i = 2; i <= num; i++) {

    if (isPrime(i)) {
      sum += i;
    }
  }

  function isPrime(num) {

    for (j = 2; j < num; j++) {

      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }
  return sum;
}

sumPrimes(10);
