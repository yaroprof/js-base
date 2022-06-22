// 01 
//let object = new Object()
//console.log(object);  // {}

// 02 // The create method of Object creates a new object by passing the prototype object as a parameter

//02.1
//let object = Object.create(null)
//console.log(object);  // [Object: null prototype] {}

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




















