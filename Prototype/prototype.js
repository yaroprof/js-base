// Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.
//The prototype on object instance is available through Object.getPrototypeOf(object) or **proto** property whereas prototype on constructors function is available through Object.prototype.

// 01  
//const personPrototype = {
//	greet(){
//		console.log(`hello, my name is ${this.name}!`);
//	}
//}
//function Person(name){
//	this.name = name
//}
//Person.prototype = personPrototype
//Person.prototype.constructor = Person

//const ted = new Person('Ted')
//ted.greet()
//console.log(ted);

