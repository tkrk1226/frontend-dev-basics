/* 

변수의 범위 (Scope)
1. 자바스크립트는 어휘에서 변수의 범위를 알 수 있다. (Lexical Scope)
ex. var i = 10;

2. ES6 이전 (<= ES5)
    - 자바와 같은 Block 범위를 지원하지 못했다.
    - ES5 까지는 함수 범위만 지원을 함
    - function() {...} 안에서 변수 앞에 var 키워드를 사용하면 함수 범위를 가지게 된다.
    - 만약에 var 키워드가 없이 함수 안에서 변수를 정의하면 전역범위를 가지게 된다. (hoisting)

3. ES6 이후 (ES6)
    - Block Scope를 적용할 수 있는 두 개의 키워드를 지원(let, const)
    - let : 변수
    - const : 상수
    
4. 결론
    - const, let만 사용하고 반드시 붙이자!!! (안붙이면 hoisting)
    
*/

var i = 10;
var f  = function() {
    var i = 20;
    j = 100;
    console.log(i);
    i = j - 1;
    console.log(i);
}

// var 키워드는 함수 블록에서 함수 범위만 가지게 할 때 적용된다. 
if(90 + 10 == 100){
    var k = 30;
}

{
    let x = 1000000;
    const PI = 3.14;
    x = 100;

    // const는 수정 불가능
    // PI = 0;
    
}

// error : 접근이 안된다.
// console.log(x);
// console.log(PI);

f();

console.log(i);
console.log(j);
console.log(k);



