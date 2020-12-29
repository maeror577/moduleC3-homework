/*
 * Задание 3.
 * Написать функцию, которая создает пустой объект, но без прототипа.
 */

function createObjectWithNullPrototype() {
  return Object.create(null);
}

// Test
const obj1 = createObjectWithNullPrototype();
const obj2 = {};

console.log(`obj1 prototype = ${obj1.__proto__}`);  // undefined
console.log(`obj2 prototype = ${obj2.__proto__}`);  // Object
