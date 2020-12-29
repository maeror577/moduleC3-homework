/*
 * Задание 2.
 * Написать функцию, которая принимает в качестве аргументов строку и
 * объект, а затем проверяет есть ли у переданного объекта свойство
 * с данным именем. Функция должна возвращать true или false.
 */

function checkPropertyInObject (str, obj) {
  return (str in obj);
}

// Test
const obj = {
  property1: "Value 1",
  property2: "Value 2",
  property3: "Value 3"
}

console.log(checkPropertyInObject("property1", obj));  // true
console.log(checkPropertyInObject("property3", obj));  // true
console.log(checkPropertyInObject("property4", obj));  // false
