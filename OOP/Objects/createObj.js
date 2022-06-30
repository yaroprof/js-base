// 01 --- create an object with the keyword - new

// function Car (model, color, age) {
//   this.color = color
//   this.model = model
//   this.age = age
// }
// const Car1 = new Car ('Audio', 'black', 2015)
// console.log(`This ${Car1.model} is ${Car1.color} color , and ${Car1.age} old`);

// 02 // The create method of Object creates a new object

//02.1
// The Object.create() method is used to create a new object with the specified prototype objecct and properties.

// proto - object
function person(){
  this.name = 'Peter'
}
// greet combine sekf context with person context
// return 
function greet(){
  person.call(this)
  return ` ${this.name} Hello `
}

// 01- create new Object which combine 2 object: person & greet
greet.prototype = Object.create(person.prototype)
console.log(greet());  //  Peter Hello 

// 02 - create an instance - new Object - 'const app' with greet - constructor
const app = new greet()
console.log(app.name);  // Peter






//02.2
//const person = {
//	isHuman: false,
//	introduction: function(){
//		console.log(`My namme is ${this.name}. Am I human? ${this.isHuman}`);
//	}
//}
//const me = Object.create(person)
//me.name = 'John'
//me.isHuman = true
//me.introduction()

// 03 - Object literal syntax  

//let object = {
//	name: 'Peter',
//	age: 35
//}
//console.log(object.name);

// 04 Function *constructor:
// Create any function and apply the new operator to create object instances,

//function Person(name, age){
//	this.name = name;
//	this.age = age;
//}
//let object = new Person('Peter', 43)
//console.log(object);

// 05 Function constructor with *prototype:
// This is similar to function constructor but it uses prototype for their properties and methods
//function Person(){}
//Person.prototype.name = 'John'
//let object = new Person()
//console.log(object.name);

// 06
// ES6 introduces *class feature to create the objects
//class Person{
//	constructor(name){
//		this.name = name
//	}
//}
//let object = new Person('Bob')
//console.log(object);




















