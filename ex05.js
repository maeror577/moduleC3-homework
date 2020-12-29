/*
 * Задание 5.
 * Переписать консольное приложение из предыдущего юнита на классы.
 */

class ElectricalDevice {
  constructor(name, brand, power) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.isConnected = false;
  }

  connect() {
    this.isConnected = true;
    console.log(`${this.name} is connected.`)
  }
  
  disconnect() {
    this.isConnected = false;
    console.log(`${this.name} is disconnected.`)
  }
}



class Computer extends ElectricalDevice {
  constructor(name, brand, power, type) {
    super(name, brand, power);
    this.type = type;
    this.isConnected = false;
  }
}



class TV extends ElectricalDevice {
  constructor(name, brand, power, resolution, display) {
    super(name, brand, power);
    this.resolution = resolution;
    this.display = display;
    this.isConnected = false;
    this.isOn = false;
  }

  turnOn() {
    if (this.isConnected) {
      this.isOn = true;
      console.log(`${this.name} is now on.`)
    } else {
      console.log("Before turning on you should plug the TV.")
    }
  }
  
  turnOff() {
    this.isOn = false;
    console.log(`${this.name} is now off.`)
  }
}



class Refrigerator extends ElectricalDevice {
  constructor(name, brand, power, color, hasFreezer) {
    super(name, brand, power);
    this.color = color;
    this.hasFreezer = hasFreezer;
    this.isConnected = false;
    this.isLocked = false;
  }

  lock() {
    this.isLocked = true;
    console.log(`${this.name} is now locked.`);
  }
  
  unlock() {
    this.isLocked = false;
    console.log(`${this.name} is now unlocked.`);
  }
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
