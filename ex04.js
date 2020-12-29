/*
 * Задание 4.
 * Реализовать следующее консольное приложение подобно примеру,
 * который разбирался в видео. Реализуйте его на прототипах.
 * Определить иерархию электроприборов. Включить некоторые в розетку.
 * Посчитать потребляемую мощность. Таких приборов должно быть,
 * как минимум, два (например, настольная лампа и компьютер).
 * Выбрав прибор, подумайте, какими свойствами он обладает.
 * 
 * План:
 * 1. Определить родительскую функцию с методами, которые включают и
 *    выключают прибор из розетки.
 * 2. Создать делегирующую связь [[Prototype]] для двух конкретных
 *    приборов.
 * 3. У каждого из приборов должны быть собственные свойства и,
 *    желательно, методы, отличные от родительских методов.
 * 4. Создать экземпляры каждого прибора.
 * 5. Вывести в консоль и посмотреть результаты работы.
 */

function ElectricalDevice(name, brand, power) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.isConnected = false;
}

ElectricalDevice.prototype.connect = function() {
  this.isConnected = true;
  console.log(`${this.name} is connected.`)
}

ElectricalDevice.prototype.disconnect = function() {
  this.isConnected = false;
  console.log(`${this.name} is disconnected.`)
}



function Computer(name, brand, power, type) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.type = type;
  this.isConnected = false;
}

Computer.prototype = new ElectricalDevice();



function TV(name, brand, power, resolution, display) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.resolution = resolution;
  this.display = display;
  this.isConnected = false;
  this.isOn = false;
}

TV.prototype = new ElectricalDevice();

TV.prototype.turnOn = function() {
  if (this.isConnected) {
    this.isOn = true;
    console.log(`${this.name} is now on.`)
  } else {
    console.log("Before turning on you should plug the TV.")
  }
}

TV.prototype.turnOff = function() {
  this.isOn = false;
  console.log(`${this.name} is now off.`)
}



function Refrigerator(name, brand, power, color, hasFreezer) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.color = color;
  this.hasFreezer = hasFreezer;
  this.isConnected = false;
  this.isLocked = false;
}

Refrigerator.prototype = new ElectricalDevice();

Refrigerator.prototype.lock = function() {
  this.isLocked = true;
  console.log(`${this.name} is now locked.`);
}

Refrigerator.prototype.unlock = function() {
  this.isLocked = false;
  console.log(`${this.name} is now unlocked.`);
}



// Test
const customColor = "color: green"; // for coloring info output
const desktopPC = new Computer("Desktop computer", "MSI", 150, "desktop");
const laptopPC = new Computer("Laptop computer", "Asus", 65, "laptop");
const livingRoomTV = new TV("Living room TV", "Samsung", 45, "1080p", "LED");
const refrigerator = new Refrigerator("Refrigerator", "LG", 250, "white", true);

console.log("%cAll devices:", customColor);
console.log(desktopPC);
console.log(laptopPC);
console.log(livingRoomTV);
console.log(refrigerator);
console.log("%cPlugging first computer...", customColor);
desktopPC.connect();
console.log("%cPlugging second computer...", customColor);
laptopPC.connect();
console.log("%cTV is unplugged, shouldn't turn on.", customColor);
livingRoomTV.turnOn();
console.log("%cPlugging TV...", customColor);
livingRoomTV.connect();
console.log("%cNow it should turn on.", customColor);
livingRoomTV.turnOn();
console.log("%cPlugging refrigerator...", customColor);
refrigerator.connect();
console.log("%cLocking refrigerator...", customColor);
refrigerator.lock();
console.log("%cAnd now for disconnecting...", customColor);
desktopPC.disconnect();
laptopPC.disconnect();
livingRoomTV.disconnect();
refrigerator.disconnect();
