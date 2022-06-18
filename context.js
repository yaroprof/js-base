
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

//const person= {
//	fullName: function(age,job){
//		console.log(`${this.firstName} ${this.lastName} ${age} old ${job}`)
//	}
//}

//const person1 = {
//	firstName : 'John',
//	lastName: 'Doe'
//}

//const person2 = {
//	fullName: 'Mary', 
//	lastName: 'Doe'
//}
//person.fullName.call(person1, 35, 'developer');

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

const person= {
	firstName: 'John',
	lastName: 'Doe',
	display: function(){
		console.log(`${this.firstName} ${this.lastName}`)  // John Doe --- with Bind method
	}
}

const personNew = person.display.bind(person)
setTimeout(personNew, 3000)






















