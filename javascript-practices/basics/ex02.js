/*
변수와 데이터 타입
데이터를 저장할 때는 저장하는 공간의 타입이 존재한다.

[기본 타입(premitive, 원시)]
 - undefined
 - number
 - string
 - boolean

[객체]
 - object
    1. new 생성자 함수() 사용해서 생성
    2. 
    3. 
    4. 
 - function
*/

console.log("===기본 타입(premitive, 원시)=====================")
var u = undefined; // var u; 동일. 선언과 정의의 구분이 없다.
var i = 10;
var s = "Hello World";
var b = true;

console.log("u : " + typeof(u));
console.log("i : " + typeof(i));
console.log("s : " + typeof(s));
console.log("b : " + typeof(b));

console.log("===객체 타입1 : object type=====================")
var i2 = new Number(1);
var s2 = new String("Hello World!@");
var b2 = new Boolean(false);
var o = new Object();
var a = new Array(); // 배열도 객체이다.

console.log("i2 : " + typeof(i2));
console.log("s2 : " + typeof(s2));
console.log("b2 : " + typeof(b2));
console.log("o : " + typeof(o));
console.log("a : " + typeof(a));

console.log("===객체 타입2 : function type=====================")