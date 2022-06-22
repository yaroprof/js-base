// 01 - program to count down numbers to 1
//function countDown(number) {

//    console.log(number);
//    const newNumber = number - 1;
//    //// base case
//    if (newNumber > 0) {
//        countDown(newNumber);
//    }
//}

//countDown(4);

// 02  addition number
//function countUp(num){
//	console.log(num);
//	const newNum  = num + 1
//	if(num < 10){
//		countUp(newNum)
//	}
//}
//countUp(0)

// 03  Multi number
// function counMulti(num){
//	console.log(num);
//	const newNum = num * 3
//	if(num < 150){
//		counMulti(newNum)
//	}
//}
//counMulti(3)

// 04  
//function factorial(x){
//	// if num = 0
//	if( x === 0 ){
//		return 1
//	}
//	// if num is positive
//	else{
//		return x * factorial(x - 1)
//	}
//}

//// if num is non-negative
//const num = 7
//if (num > 0){
//	let result = factorial(num)
//	console.log(`The factorial of ${num} is ${result}`);
//}

// 05  Recursively random a number until it returns 5

//function randomUntilFive(result, count){

//	if (result === 10){
//		console.log(`The random result ${result}`);
//		console.log(`How many times random is executed: ${count}` );
//		return
//	}
//	result = Math.floor(Math.random() * (20-1) + 1)
//	count++
//	randomUntilFive(result, count)
//}
//randomUntilFive(0, 0)

// 06  create factorial

//function factorial(num){
//	if ( num === 1){
//		return num
//	}
//	return num * factorial( num - 1 )
//}
//console.log(factorial(4));


