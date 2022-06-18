
const citiesUkraine = ['Kyiv', 'Odesa', 'Lviv', 'Rivne']
const citiesEurope = ['London', 'Rome', 'Praga', 'Tallin']

const UkrainePopulation = {
	Kyiv: 15,
	Odesa: 7,
	Lviv: 3, 
	Rivne: 2
}
const EuropePopulation = {
	Kyiv: 9,
	London: 17,
	Rome: 9,
	Praga: 7,
	Tallin: 2
}

// --- SPREAD
// 01 -
//console.log(...citiesUkraine);
// легко об'єднувати масиви та елементи різних типів даних
//const allCities = [...citiesEurope,...citiesUkraine, 'Denver']
// or with concat method
//const allCities = citiesUkraine.concat(citiesEurope)
//console.log(allCities);

// 02 - spread with objects
// об'єднання 2х об'єктів
//console .log({...UkrainePopulation, ...EuropePopulation});

// 03- on Practice
//const numbers = [3, 15, 34, 73, 35, 1550]
//console.log(Math.max(...numbers)); // використю spread, щоб перевести масив в звичайний числовий ряд

// 04- 
//const sum = (x,y,z) => x+y+z
//const num = [1,2,3]
//console.log(sum(...num));


// --- REST
//const sum = (a,b) =>{
//	return a + b
//}
//const numbers = [1,2,3,4,5]
//// Spread
//console.log(sum(...numbers));

// --- SPREAD
// 01
//const sum = (a,b,c, ...rest) =>{  // ...rest - який добавляє скільки необх. елементів
//	return a+b+c + rest.reduce(( acu, i ) => acu + i ,0)   // reduce - перетворює на арифм. результат
//}
//const num = [1,2,3,4,5]
//console.log(sum(...num))  // num - spread. який перетвор. масив на рядок

// 02 
//const numbers= [1,2,3,4,5]
//const [a,b, ...other] = numbers
//console.log(a,b,other);

// 03
//const person = {
//	name: 'Peter', 
//	age: 35,
//	city: 'Texas', 
//	State: 'California'
//}

//const{name, age, ...address} = person
//console.log(name, age, address);












