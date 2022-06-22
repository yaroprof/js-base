
//01
//console.log(this === window);  // true // this посилається на об'єкт window

//02  

//function getThis(){
//	return this
//}
//console.log(getThis() === globalThis);  // true -посилання на глобальний об'єкт

////03

//const user = {
//	age: 100,
//	getAge(){
//		return this.age
//	}
//}
//console.log(user.getAge());  // 100 - посилання на сам об'єкт


//// 04

//const user = {
//	age: 100,
//	getAge: () =>{
//		return this.age
//	}
//}
//console.log(user.getAge());  // undefined - при arrow function- this не посил. на свій об'єкт








