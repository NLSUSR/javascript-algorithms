/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
 */

function anagram(str1, str2) {
  const stringOne = str1.toLowerCase();
  const stringTwo = str2.toLowerCase();
  if (typeof str1 != "string" || typeof str2 != "string") return false;
  if (stringOne === stringTwo) return false;
  return (
    stringOne.split("").sort().join() === stringTwo.split("").sort().join()
  );
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram("finder", "Friend")); // true
console.log(anagram("hello", "bye")); // false
