// ------- Function Declaration
// --- When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:
// ver.01
//function myFunc(theObj){
//	theObj.model = 'Nokia'  // function inner object
//}
//// second object
//let myPhone = {model: 'Samsung', model: 'Galaxy', year: 2022}
//let x, y
//x = myPhone.model

//myFunc(myPhone)
//y = myPhone.model
//console.log(y);

// ver.02
//function oldCar(oldCarObj){
//	oldCarObj.model = 'Opel'
//}
//let newCar = {model: 'Audi', year: 2021}
//let x,y
//x = newCar.model
//console.log(x);

//oldCar(newCar)

//y = newCar.model
//console.log(y);

// ---When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function, as shown in the following example:
// ver.01
//function model(firstModel){
//	firstModel[0] = 'BMW'
//}
//const secondModel = ['Audi']
//console.log(secondModel[0]);

//model(secondModel)
//console.log(secondModel[0]);

// ver.02
//function outerArr(arr){
//	arr[0] = 45;
//}
//const myArray = [33]
//console.log(myArray);

//outerArr(myArray)
//console.log(myArray);


// --- Function Expressions

// ver.01
//const person = function(firstName, secondName){
//	var fullName = firstName + secondName
//	console.log(fullName);
//} 
//person('John ', 'Doe')

// ver.02
// expression with func-name
//const factorial = function fac(n){
//	return n < 3 ? 1 : n * fac(n - 1)
//}
//console.log(factorial(4));

// ver.03

//function map(func, arr) {
//	let result = []; // Create a new Array
//	let i; // Declare variable 
//	for (i = 0; i != arr.length; i++)
//	  result[i] = func( arr[i] );
//	return result;
//  }
//  const func = function(x) {
//	 return x * x * x;
//  }
//  let numbers = [ 0, 1, 3, 4, 5 ] ;
//  let cube = map( func, numbers );
//  console.log( cube );

// ver. 04 -  function hoisting only works with function declarations—not with function expressions

//console.log(square(5));  // Cannot access 'square' before initialization
//const square = function(n){
//	return n * n
//}












// --- Calling Function
// --- Closures
// --- Using the arguments object
// --- Function Parameters