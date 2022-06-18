
//function order(){
//	return new Promise ((resolve, reject) =>{
//		async function order(){
			
//		}
//	})
//}

// 01
async function myFunction(){
	console.log('Hello'); 
	}
myFunction().then(
	function(value){myFunction(value)},
	function(error){myFunction(error)}
)


