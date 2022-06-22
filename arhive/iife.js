// 01
//let result = []; 
//for(let i=0; i < 5; i++){
//	result.push(function(){
//		console.log(i);
//	})
//}
//result[2]()  // result- функція - одразу її викликаємо

// 02
//let result = [];
//for (var i = 0; i < 5; i++){
//	(function(){
//		var j = i
//		result.push( function(){console.log(j)})  // 2
//	})()
//}
//result[2]()

// 03

//  const person = {
//	  name: 'John',
//	  secondName: 'Doe',
//	  job: 'developer',
//	  about: function (what){
//		console.log(`You know ${what} is doing ${name} ${this.secondName} - ${this.job} now? `)
//	  } 
//  }
// person.about('codding')