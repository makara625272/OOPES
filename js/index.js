import { Toyota } from './Toyota.js';
import { Luxes } from './Luxes.js';
import { RR } from './RR.js';
//............................
console.log("Toyota properties....");
const Toyota1 = new Toyota();
Toyota1.setName("Toyota1999");
Toyota1.getName();
Toyota1.setBrand("6666");
Toyota1.getBrand();
Toyota1.speed();
Toyota1.back();
Toyota1.setColor("Red");
Toyota1.stop();
//......................
console.log("Luxes Function..............");
const Luxes1 = new Luxes();
Luxes1.openDoor();
//............................

console.log("RR Price....");
const RR1 = new RR();
RR1.setPrice("500000$");
RR1.getPrice();

