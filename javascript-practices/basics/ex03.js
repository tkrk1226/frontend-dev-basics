/* null과 undefined */

var myVar1 = undefined; // 명시적 undefined 대입
var myVar2; // undefined가 대입이 됨
var myVar3 = null; // object type, null 참조가 됨

console.log("myVar1 : " + typeof(myVar1)); 
console.log("myVar2 : " + typeof(myVar2));
console.log("myVar3 : " + typeof(myVar3));

console.log(myVar1 == myVar3); // 단순 value 비교
console.log(myVar1 === myVar3); // type & value 비교

console.log("================================================");
// == : equality 값의 동치성, 형변환
console.log( 4 == "4" );
console.log( 4 == parseInt('4') ); // 개발자가 제대로 검사해야함, typeScript로 만들고 자바로 trans...
console.log( false == 0 );
console.log('abc' == new String('abc'));

console.log(true + 10); // 11
console.log('abc' + new String('abc')); // abcabc
console.log(1 + "1"); // 11 
console.log("1" + 1); // 11 

console.log("================================================");
// === : identity
// 1. 타입의 동일성 + 값의 동일성 : 원시타입
// 2. 객체의 동일성  : 객체

console.log("2" === 2);
console.log(true === 1);
console.log(2 === 4);
console.log(new Number(4) === new Number(4));