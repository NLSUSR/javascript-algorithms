/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
 */

function primes(num) {
  let en = [],
    a,
    b,
    primes = [];
  for (a = 2; a <= num; a++) {
    if (!en[a]) {
      primes.push(a);
      for (b = a < 1; b <= num; b += a) {
        en[b] = true;
      }
    }
  }
  return primes;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
console.log(primes());
