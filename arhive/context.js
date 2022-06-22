
function hello(){
	console.log('Hello', this);
}

// --- Bind context Methods

//const person = {
//	name: 'Peter',
//	age: 35,
//	sayHello: hello,
//	sayHelloWindow: hello.bind(document),
//	logInfo: function(job, phone){
//		console.log(`${this.name} info:`);
//		console.log(`name is  ${this.name}`);
//		console.log(`Age is  ${this.age}`);
//		console.log(`Job is ${job}`);
//		console.log(`Phone is ${phone}`);
//		console.groupEnd();
//	}
//}

// --- Bind context Methods
//const helen= {
//	name: 'Helen',
//	age: 25,
//}
////об'днуємо helen -context разом з person - context. Створено нову фун-ю з об'єднаним контекстом
//const fnHelenInfo = person.logInfo.bind(helen, 'developer','0966555')
//fnHelenInfo()

//const john = {
//	name: 'John',
//	age: 35
//}
//const fnJohnInfo = person.logInfo.bind(john, 'designer', '843417')
//fnJohnInfo()

// --- Call- method

const person= {
	fullName: function(age,job){
		console.log(`${this.firstName} ${this.lastName} ${age} old ${job}`)
	}
}

const person1 = {
	firstName : 'John',
	lastName: 'Doe'
}

const person2 = {
	fullName: 'Mary', 
	lastName: 'Doe'
}
person.fullName.call(person1, 35, 'developer');

// --- Different between Apply/ Call - methods

// --- Apply- method

//const person= {
//	fullName: function(age,job){
//		console.log(`${this.firstName} ${this.lastName} ${age} old ${job}`)
//	}
//}

//const person1 = {
//	firstName : 'John',
//	lastName: 'Doe'
//}

//person.fullName.apply(person1, [25, 'designer'])

// --- Call- method

//const person= {
//	fullName: function(age,job){
//		console.log(`${this.firstName} ${this.lastName} ${age} old ${job}`)
//	}
//}

//const person1 = {
//	firstName : 'Mary',
//	lastName: 'Doe'
//}

//person.fullName.call(person1, 25, 'developer')


// --- Different between Call/ Bind - methods

// without Bind
//const person= {
//	firstName: 'John',
//	lastName: 'Doe',
//	display: function(){
//		console.log(`${this.firstName} ${this.lastName}`)  // undefined undefined -> callBack
//	}
//}

//setTimeout(person.display, 3000)


// with Bind method --- dont loosing this

//const person= {
//	firstName: 'John',
//	lastName: 'Doe',
//	display: function(){
//		console.log(`${this.firstName} ${this.lastName}`)  // John Doe --- with Bind method
//	}
//}

//const personNew = person.display.bind(person)
//setTimeout(personNew, 3000)


// --- Different between Call/ Bind/ Apply - methods

//Call invokes the function and allows you to pass in arguments one by one.
//Apply invokes the function and allows you to pass in arguments as an array.
//Bind returns a new function, allowing you to pass in a this array and any number of arguments.
//Apply vs. Call vs. Bind Examples

//## Call

//var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
//var person2 = {firstName: 'Kelly', lastName: 'King'};
//function say(greeting) {
//    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
//}
//say.call(person1, 'Hello'); // Hello Jon Kuperman
//say.call(person2, 'Hello'); // Hello Kelly King

// ## Apply
//var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
//var person2 = {firstName: 'Kelly', lastName: 'King'};

//function say(greeting) {
//    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
//}
//say.apply(person1, ['Hello']); // Hello Jon Kuperman
//say.apply(person2, ['Hello']); // Hello Kelly King

// ## Bind

//var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
//var person2 = {firstName: 'Kelly', lastName: 'King'};
//function say() {
//    console.log('Hello ' + this.firstName + ' ' + this.lastName);
//}
//var sayHelloJon = say.bind(person1);
//var sayHelloKelly = say.bind(person2);
//sayHelloJon(); // Hello Jon Kuperman
//sayHelloKelly(); // Hello Kelly King
















