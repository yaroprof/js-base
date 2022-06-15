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
// --- Calling Function
// --- Closures
// --- Using the arguments object
// --- Function Parameters