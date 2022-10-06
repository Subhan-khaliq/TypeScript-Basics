import {Person, Employee} from "./classes";


const person = new Person("Jane","Steet No 5","House No A12");
const employee = new Employee("Subhan", "Street No 7", "House No B15");

console.log(person.getName());
console.log(person.getAddress());

console.log(employee.getEmployeeName());
console.log(employee.getAddress());
