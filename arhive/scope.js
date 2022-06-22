// --- Global Scope

// 01 var. a declaration in global scope
// - a can be used anywhere in the program
//let a = 'hello'
//function greet(){
//	console.log(a);  // hello
//}
//greet()

// 02  the value of a global function can be changed insiade a function
//let a = 'hello'
//function greet(){
//	a = 3
//}
//// before func/call
//console.log(a);  // hello
//greet()
////after func/call
//console.log(a);  // 3

// 03
//let carModel = 'Mazda'
//function newModel(){
//	carModel = 'Mazda-new'
//}
//console.log(`before func-call carModel: ${carModel}}`);
//newModel()
//console.log(`after func-call carModel: ${carModel}`);


// 04 --- In JavaScript, a variable can also be used without declaring it. If a variable is used without declaring it, that variable automatically becomes a global variable. Note: In JavaScript, there is "strict mode"; in which a variable cannot be used without declaring it. To learn more about strict,

//function greet(){
//	let a = hello 
//}
//greet()
//console.log(a);  // error


// --- Local Scope
// a variable can also have a local scope. i.e. it can only be accesse within a function
// 01
//let a = 'hello '
//function greet(){
//	let b = 'dears'
//	console.log(a+b);  // hello dears
//}
//greet()
//console.log(a+b);  // error  - in global scope - b is not define

//let firstName = 'Peter '
//function person(){
//	let fullName = firstName + 'Doe'
//	console.log( fullName );  // Peter Doe
//}
//console.log(firstName);  // Peter 
////console.log(fullName);  // error
//person()


// --- Let is Block Scope
// the let keyword is blocked-scope ( variable can be accessed only in the immediate block )

// 01
//let a = 'Hello '
//function greet(){
//	let b = 'world'
//	console.log( a + b);  // Local variable have access to global var.

//	if( b == 'world' ){
//		let c = 'hello'  // let c- block scope , have access to abowe scopes
//		console.log(a + ' ' + b + ' ' + c);
//	}
//	console.log(a + ' ' + b + ' ' + c);  //  c is not defined // let c- block scope 
//}
//greet()

// 02 

//let firstName = 'Peter '
//function fullName(){
//	let secondName = 'Doe'
//	//console.log( firstName + secondName );  // Peter Doe
//	if(secondName == 'Doe'){
//		let nickName = 'Sly'
//		//console.log(`The full name is ${firstName} ${secondName} and his nickname is ${nickName}`);
//		 //The full name is Peter  Doe and his nickname is Sly
//		// console.log(`The first name is ${firstName}`);  // The first name is Peter 
//	}
//	//console.log(`The full name is ${firstName} ${secondName} and his nickname is ${nickName}`);  // nickName is not defined
//	//console.log(`The full name is ${firstName} ${secondName}`);  // The full name is Peter  Doe
//	//console.log(`The first name is ${firstName}`); //The first name is Peter 
//}
////console.log( firstName + secondName );  // error
////console.log(`The first name is ${firstName}`);  // The first name is Peter 
//fullName()  


// --- VAR is function scoped
// variable declarated with VAR can be accessed anywhere within a function
// 01
//function greet(){
//	var a = 'Hello'
//	console.log(a);  // Hello
//}
//greet()

// 02
//function person(){
//	var name = 'Joe'
//	if( name == 'Joe' ){
//		console.log(`His name is ${name}`); // His name is Joe
//	}
//}
//person()


// --- difference between VAR & LET declaration:

//  01 - variable declarated with LET accessed particular in a block scope and VAR decl. accessed anywhere within a function

//function fullName(){
//	var firstName = 'Peter'
//	if( firstName == 'Peter' ){
//		let secondName = 'Johnson'
//		//console.log(`Full name is ${firstName} ${secondName}`);  // Full name is Peter Johnson
//	}
//	//console.log(`Full name is ${firstName} ${secondName}`);  // error -  secondName is not defined
//}
//fullName()


// 02 - LET doesn`t allow to redaclare variables

// with VAR
//var name = 'Peter'
//var name = 'John'
//console.log(name);  // John

// with LET
//let model = 'Sony'
//let model = 'Samsung'
//console.log(model);  // error - 'model' has already been declared

// with LET - but we can update
//let model = 'Sony'
//model = 'Philips'
//console.log(model);  // Philips


// 03 - Redaclarating with VAR in a different block changes the value of the outher value too
//var name = 'Sara'
//console.log(name);  // Sara
//{
//	var name = 'Joan'  // Joan
//	console.log(name);
//}
//console.log(name);  // Joan

// 04 - Redaclarating with LET in a different scope or block treats that variables as a difference variable and variable outside does not to change

//let color = 'black'
//console.log(color); //  black
//{
//	let color = 'red'
//	console.log(color);  // red
//}
//console.log(color); // black

// 05  - LET doesnt allow Hoisting

// variable decl. with VAR are hoisted to the top of the scope
//console.log(job);
//var job  // undefined, but hoisted

// the keywoed declarated with let does not allow hoisting
//console.log(car);  // Cannot access 'car' before initialization
//let car

















