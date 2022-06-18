
// 01
// Async request
//console.log('Request data...');
//// емуляція відправки на сервер, як асинхронна функція
//// 2 асинхронності з вклладенням- 2 callback функції- це не зручно...
//setTimeout(() =>{
//	console.log('Preparing data...');

//	const backendData = {
//		server: 'aws',
//		port: 2000,
//		status: 'working'
//	}

//	setTimeout(()=>{
//		backendData.modified = true
//		console.log('Data recieved', backendData);
//	}, 2000)
//}, 2000)


// 02
// const p - екземпляр від глобального об'єкта - Promise
// 2 параметри в колл-бек-функції: resolve - , reject
// отримали кол-бек- фун-ю у конструкторі класів- Promise
// є певний асинхронний код, який огорнули в Promise
// ф-я resolve викликається, коли Успішно виконана асинхронна операція
//const p = new Promise((resolve, reject) =>{
//	console.log('Preparing data...');
//	const backendData = {
//		server: 'aws',
//		port: 2000,
//		status: 'working'
//	}
//	resolve(backendData) // повідомл. Promise, що він вдало закінчив виокнання 
//})

//// p - Promise буде викликан., коли буде виконаний метод resolve() -вище
//p.then(data =>{
//	console.log('Promise resolved', data)
//})

// 03
























