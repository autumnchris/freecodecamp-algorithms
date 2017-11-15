// Sum All Primes

/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes(num) {

  var sum = 0;

  for (var i = 2; i <= num; i++) {

    var isPrime = true;
    for (var j = 2; j <= i; j++) {

      if (i % j === 0 && i !== j) {
        isPrime = false;
      }
    }

    if (isPrime) {
      sum += i;
    }
  }

  return sum;
}

sumPrimes(10);
