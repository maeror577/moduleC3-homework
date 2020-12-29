/*
 * Задание 1.
 * Написать функцию, которая принимает в качестве аргумента объект и
 * выводит в консоль все ключи и значения только собственных свойств.
 * Данная функция не должна возвращать значение.
 */

function printObjectOwnProperties(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      console.log(prop, obj[prop]);
    }
  }
}

// Test
const parent = {}
parent.parentProperty1 = "Parent Property Value 1";
parent.parentProperty2 = "Parent Property Value 2";

const child = Object.create(parent)
child.childProperty1 = "Child Property Value 1";
child.childProperty2 = "Child Property Value 2";

printObjectOwnProperties(child); // childProperty1 & childProperty2 only
