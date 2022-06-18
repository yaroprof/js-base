// --- Приведення типів
//01
// відбув. приведення в бульове значення- true/false

//let language= 'JS'
//if(language){
//	console.log(`The best lang is ${language}`);
//}

// 02  - ‘’ , 0, null, undefined. Nan, false - при приведенні до boolean видають false
//console.log(Boolean(''));  // false
//console.log(Boolean('Hello'));  // 'Hello' - true
//console.log(Boolean(' '));  // true- пробіл -це символ
//console.log(Boolean('0')); // 0 - true - символ
//console.log(Boolean(0));  // false- нул.число

//console.log(Boolean([]));   // true
//console.log(Boolean({}));   // true
//console.log(Boolean(function(){}));   // true


// - string & numbers

// коли string  не розуміє оператор (*, /, -), розуміє тільки +, тоді не відбувається приведення до string
// важливий порядок- string на початку він може приводити до свого типу інакше ні

//console.log( 1 + '2'); // 12  - + спрацьовує як конкатенація і приводить 1 до string
//console.log(typeof(1 + '2') ); // string
//console.log('' + 1 + 2);   // 12 - аналогічно
//console.log( '' - 1 + 0 ); // -1  - мінус не працює як конкат.
//console.log('3' * '8');    // 24  - приведенення до чисел,для string * не визначений цей оператор і JS буде приводити все до чесел
//console.log( 8 + 10 +'px');  // 18px  - string в кінці, тому віне не приводить до string
//console.log('px' + 5 + 3);  // px53 - відбулась канкатенація та привдення типу до string
//console.log('42' - 40);  // 2  - мінус не конкатенує, тому js приведе перший елемент до числа
//console.log('42px' - 2);   // NaN - відбулось перетоврення, але px- не число
//console.log(null + 2);   // 2  - null при привденні буде = 0
//console.log(undefined + 45);   // NaN  - undefined не можливо привести до числа

 
// ---    == vs  ===

//console.log( 2 == '2' );   // true  - відбул . приведення типів
//console.log( 2 === '2' );   // false  - НЕ відбул . приведення типів
//console.log( undefined == null );  // true
//console.log( undefined === null );  // false
//console.log( '0' == false );  //  true -  все приводить до числа 
//console.log('0' == 0 );  // true  

// - цікаві моменти -ЗАПАМ'ЯТАТИ!
//console.log( false == '' );  // true
//console.log( false == [] );  // true
//console.log( false == {} );  // false 
//console.log( '' == 0 );  // true
//console.log( '' == [] );  //  true
//console.log( '' == {} );  //  false
//console.log( '' == null );  //  false


























