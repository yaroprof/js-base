// --01
// 01- виклик. order
// 02- додаємо callback- production до - order
//let order = (call_production) =>{
//	console.log("Order placed. Please call production")
//	call_production();
//}

//order(production)



// 01  --- PROMISE
// з конструктора Promise створ змінну let myPromise, всередині callBack з аргументами- дозволу та заборони
//let myPromise= new Promise(function(meResolve, myReject){
//// в залежнсті який вибір дозволу спрацьовує та чи інша фун-я
//  myResolve();
//  myReject();
//// якщо Resolve? спрацьовує метод - .then і відбува. подальше вирішення
//myPromise.then(
//  function(value){},
//  function(error){}
//)
//}

// 02 - Promise working process

//function myDisplayer(some){
//  console.log(some);
//}
//let myPromise = new Promise(function(myResolve, myReject){
//  let x= 5 

//  if (x > 0) {
//    myResolve('OK')
//  }else{
//    myReject('Error')
//  }
//});

//myPromise.then(
//  function(value) {myDisplayer(value)},
//  function(error) {myDisplayer(error)}
//)



// --- Store
/*
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let shopIsOpen = true

let order =  (time, work) =>{
	return new Promise((resolve, reject) =>{
		if(shopIsOpen){
			setTimeout(()=>{
				resolve(work())
			}, time)
		}else{
			reject (console.log('Our shop is closed'))
		}
	})
}

// step 1
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// step 2
.then(()=>{
  return order(0000,()=>console.log('production has started'))
})

// step 3
.then(()=>{
  return order(2000, ()=>console.log("Fruit has been chopped"))
})

// step 4
.then(()=>{
  return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})

// step 5
.then(()=>{
  return order(1000, ()=>console.log("start the machine"))
})

// step 6
.then(()=>{
  return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
})

// step 7
.then(()=>{
  return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
})

// Step 8
.then(()=>{
  return order(2000, ()=>console.log("Serve Ice Cream"))
})

// Store is close and customer left
// працює метод catch, коли не працює антиумова .then
// catch -соли обіцянку не виконано
.catch(()=>{
	console.log("Customer left")
  })

  // finally метод - який працює незалежно виконано обіцянку, чи ні, - закриття магазину.
.finally(()=>{
	console.log('end of day')
})
*/


