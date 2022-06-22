// 01
//class Car{  // клас
//	constructor(name, year){   // constructor
//		this.name = name;
//		this.year = year;
//	}
//}
//let myCar1 = new Car("Ford", 2014)  // створ. нового екземпляру
//console.log(myCar1);

// 02
//class Car{  // клас
//	constructor(name, year){   // constructor
//		this.name = name;
//		this.year = year;
//	}

//	age(){
//		let date = new Date()
//		return date.getFullYear() - this.year
//	}
//}

//let myCar = new Car('Ford', 2014)
//console.log(`My car is ${myCar.name} ${myCar.age()} years old`);

// ---  JavaScript Class Inheritance

class Car {
	constructor(brand){
		this.carname = brand // створ. властивість об'єкта - carname
	}
	// створ. метод- present
	present(){  
		return 'I have a ' + this.carname
	}
	
}

class Modeel extends Car{
	constructor(brand, mod){  // brand успадкували з class Car
		super(brand)
		this.model = mod
	}
	show(){
		this.present() + ', it is a ' + this.model
	}
}

// будуємо екземпляр на основі class Model
let myCar = new Model('Ford', 'Mustang')
myCar.show()



















