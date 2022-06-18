// --- forEach
 //const numbers = [1,2,3]
//const result = numbers.forEach((item) =>{
//	//console.log(item);  // повертає не масив , а окремо виведені числа
//	return item
//})
//console.log(result);  // undefined - forEach не повертає результат

// --- Map
// 01
//const numbers = [1,2,3]
//const result = numbers.map((item) =>{
//	console.log(item);
//	return item
//})
//console.log(result);  // [ 1, 2, 3 ]

// 02
//const numbers = [1,2,3]
//const result = numbers.map((item) =>{
//	return item + 1
//})
//console.log(numbers, result);  // [ 2, 3, 4 ]

// --- Filter

//const numbers = [1,2,3]
//const result= numbers.filter((item) =>{
//	return item !==2
//})
//console.log(result); // виконання умови !==3 

// --- Reduce

// agg- попереднє, з яким проводяться дії; curr - поточне; 0 - ініціалізатор
//01
//const numbers = [1,2,3]
//const result = numbers.reduce((agg, curr) =>{
//	return agg + curr
//}, 0)
//console.log(numbers, result);  // [ 1, 2, 3 ] 6

// 02
//const numbers = [1,2,3]
//const result = numbers.reduce((agg, cur)=>{
//	return agg * cur
//}, 10)
//console.log(result);

// 03
//const numbers = [1,2,34,5]
//const result = numbers.reduce((agg, cur) =>{
//	return agg/cur
//}, 5)
//console.log(result);



const people = [
	{name: 'Peter', age: 16, budget: 3000},
	{name: 'John', age: 35, budget: 1000},
	{name: 'Bob', age: 45, budget: 4000},
	{name: 'Jack', age: 15, budget: 2000},
	{name: 'Ivor', age: 35, budget: 5000},
]

//--- For  // ES-5
//for( let i= 0; i< people.length; i++){
//	console.log(people[i])
//}

// --- For of  // es-6
//for (let person of people){
//	console.log(person);
//}


//--------- Higher-Order Functions

// --- ForEach
// 01
//people.forEach(function(person, index, peopleArr){
//	console.log(person);
//	console.log(index);
//	console.log(peopleArr);
//})

// 02 - ForEach short form

//people.forEach((person) =>{
//	console.log(person);
//})


// --- MAP
// 01  
//const newPeople = people.map( person => {
//	return person
//})
//console.log(newPeople);

// 02
//const newPeople = people.map( person =>{
//	return 'Hello'
//} )
//console.log(newPeople);

//// 03 
//const newPeople = people.map( person =>{ 
//	return 'Hello ' + person.name
//})
//console.log(newPeople);

// 04
//const newPeople = people.map( person => {
//	return ` ${person.name} is ${person.age} old and he has sailary: ${person.budget} dollars }  }  `
//})
//console.log(newPeople);


// --- Filter
// 01
//const newList = people.filter(person => person.name !== 'Peter')
//console.log(newList);

// 02
//const nonAlcohol = people.filter(person => person.age > 16)
//console.log(nonAlcohol);


// --- Reduce
// 01 - with - for
//let amount = 0
//for (let i = 0; i< people.length; i++){
//	amount += people[i].budget
//}
//console.log(amount);

// 02 - reduce
// total = 0 - стартовий показник, попередній результат, який на кожній ітерації змінюється; person- поточний елемент, з яким необхідно працювати
//const amount = people.reduce((total, person) => person.budget, 0 )
//console.log(amount);


// --- Find

// 01 
//const newList = people.find( obj => obj.name === 'Bob')
//console.log(newList);

// 02
//const needBudget = people.find ( list => list.budget > 2000)
//console.log(needBudget);

// --- Find - index

// 01
//const ivor= people.findIndex( person => person.name === 'Ivor' )
//console.log(ivor);

// 02
//const profit = people.findIndex( person => person.budget > 3000 )
//	console.log(profit);



 





































































