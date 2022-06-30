//---  JSON.parse()
// The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

// 01
//const json = '{ "result": true, "count": 45 }'
//const obj = JSON.parse(json)
//console.log(obj.result);  // { result: true, count: 45 }


// --- JSON.stringify()
//The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

//console.log( JSON.stringify({ name: 'Jason', age: 35 }) ); //{"name":"Jason","age":35}