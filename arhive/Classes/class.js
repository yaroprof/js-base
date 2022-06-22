// Classes are a template for creating objects. 
// They encapsulate data with code to work on that data.
// Classes in JS are built on prototypes
// Use the keyword class to create a class.Always add a method named constructor()
// ## Defining classes:
//  ## Class declarations - To declare a class, you use the class keyword with the name of the class

// ver.01 - 
// ## class *declaration with *prototype
//class Car{
//	constructor(brand, color, age){
//		this.carname = brand
//		this.color = color
//		this.age = age
//	}
//}

//// create an instance
//let carModel1 = new Car('Mazda', 'red', 2007)
//let carModel2 = new Car('Opel', 'blue', 2010)

//Car.prototype.showCar = function(){
//    console.log(this.carname + ' is ' + this.age + ' old , and ' +  this.color + ' color');
//}

//carModel1.showCar()
//carModel2.showCar()

// ver.02 
// ## class declaration with *extends keyword- is used in class declarations or class expressions to create a class as a child of another class.
























//function Pen(name, color, price) {
//    this.name = name;
//    this.color = color;
//    this.price = price;
//}

//const pen1 = new Pen("Marker", "Blue", "$3");
//console.log(pen1);


//class Support {
//    name;
//    designation;
//    address;
//    constructor(name, designation, address) {
//        this.name = name;
//        this.designation = designation;
//        this.address = address;
//    }
//    startSession() {
//        console.log("start a support session");
//    }
//}

//const abraham = new Support("Abraham", "Web developer", "US");
//console.log(abraham);
