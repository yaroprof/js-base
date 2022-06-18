// sync request - дві операції відбуваються послідовно одна за одною
//console.log('Start1');  
//console.log('Start2');  

// виведення даних через певний час- асинхронно - setTimeout
console.log('message01');
global.setTimeout(function(){
	console.log('message02')
}, 2000)

console.log('End');  
//message01
//End
//message02