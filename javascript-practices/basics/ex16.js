/**
 * function 타입의 객체(함수)
 */

// 함수를 생성하는 방법 1 : 함수 리터럴
function f1(a, b) {
    return a + b; 
}

console.log(typeof(f1), f1(10,20));

// 함수를 생성하는 방법 2 : 함수 리터럴 ( 추천 )
var f2 = function(a, b){
    return a + b;
};
console.log(typeof(f2), f2(10,20));

// 함수를 생성하는 방법 3 : new 연산자와 함께 Function() 생성자 함수를 사용하는 방법
var f3 = new Function("a", "b", "return a+b"); // 실용적이지는 못한데 prototype chain이 걸리게 하도록 사용한다.
console.log(typeof(f3), f3(10,20));

// 함수를 생성하는 방법 4 : 익명 (Anonymous) 함수
// callback
setTimeout(function() {
    console.log("time out!");
}, 2000);

// 즉시 실행하는 함수
var s = (function(a,b){
    return a/10+b/10;
}) (10,20);
console.log(s);

// 메모리에 7개의 값이 남아버리니까 즉시 실행시켜서 메모리 낭비를 최소화하기 위함.
// var i1 = 10;
// var i2 = 20;
// var i3 = 30;
// var i4 = 40;
// var i5 = 50;
// var i6 = 60;
// var i7 = 70;
// var result = (i1 + i2 + ...)/10;

// 가변 파라미터 overloading 보다 편함

var sum = function(){ // 유사배열 형태로 나온다.
    // 모든 객체는 object 혹은 function의 형태를 가진다.
    // console.log(typeof(arguments)); // object type임
    // console.log(arguments instanceof Array, arguments.length); // this.arguments하면 undefined, instanceof Array : false, length는 나옴 (1,2,3,4,5 순으로)
    var sum = 0;
    // for (var i = 0; i < arguments.length; i++){
    //     sum += arguments[i];
    // }
    
    // Error, Arguments의 __proto__는 Object의 prototype의 chain이 되어있기 때문이다.
    // arguments.forEach(function(e){
    //     sum += e;
    // });
    
    Array.prototype.forEach.call(arguments, function(e){
        sum += e;
    }); // 배열로 쓸 객체, 반환된 값으로 사용할 함수

    return sum;
}

console.log(sum(10));
console.log(sum(10,20));
console.log(sum(10,20,30));
console.log(sum(10,20,30,40));
console.log(sum(10,20,30,40,50));