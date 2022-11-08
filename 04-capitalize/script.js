/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  if (typeof str != "string") return "";
  return str
    .split("")
    .reduce(
      (previous, item, index) =>
        previous +
        (index === 0 || previous.endsWith(" ") ? item.toUpperCase() : item),
      ""
    )
    .replace(/[*—.,]/gi, " ");
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё простит")); // "Молодость Всё Простит"
console.log(
  capitalize(
    " * Напишите функцию capitalize(str). Функция должна возвращать новую* строку каждое слово в которой начинается с прописной буквы."
  )
);
console.log(capitalize(""));
