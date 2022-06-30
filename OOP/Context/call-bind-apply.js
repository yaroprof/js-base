// difference between Call, Apply and Bind

// --- The call() method invokes a function with a given this value and arguments provided one by one

// 01
//let person1 = {firstName: 'John', job: 'dev'}

//function invite (greeting1, greeting2){
//	console.log(greeting1 + ' ' + this.firstName + ' ' + this.job + ', ' + greeting2 );
//}

//invite.call(person1, 'Hello', 'How are you? ' )

// 02
//function Product(name, price){
//	this.name = name
//	this.price =  price
//}
//function Food(name, price){
//	Product.call(this, name, price)
//}
//console.log(new Food('cheese', 5).name);

// --- The Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

// 01
//let car1 = { modelName: 'Volvo', age: 2018 }
//let car2= { modelName: 'Nissan', age: 2019 }
//function showCar(speak1, speak2){
//	console.log(speak1 + " " + this.modelName + " " + this.age + speak2);
//}
//showCar.apply(car1, ['This model', 'old'])
//showCar.apply(car2, ['This model', 'old'])

// 02
//let person1 = { name: 'Peter', secondName: 'Jonson' }
//let person2 = { name: 'John', secondName: 'Burito' }

//function greeting(greet1, greet2){
//	console.log( greet1 + ' ' + this.name + ' ' + 'and' + ' ' + greet2 );
//}
//greeting.apply(person1, ['Hey', 'how are you?'])
//greeting.apply(person2, ['Hey', 'how are you?'])


// --- The Bind returns a new function, allowing you to pass any number of arguments

//let person1 = { firstName: 'Peter', secondName: 'Jonson' }
//let person2 = { firstName: 'John', secondName: 'Burito' }
//function invite(greet1, greet2){
//	console.log(greet1 + " " + this.firstName + " " + this.secondName + ", " + greet2);
//}
//let invitePerson1 = invite.bind(person1)
//let invitePerson2 = invite.bind(person2)
//invitePerson1("Hello", "How are you?")
//invitePerson2("Hello", "How are you?")
















