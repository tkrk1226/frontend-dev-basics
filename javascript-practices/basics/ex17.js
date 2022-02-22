console.log("== global =============================");

var nn = '둘리';
console.log(nn, global.nn);

global.name = '마이콜';
console.log(name, global.name);

 // var let 둘 다 안됨 , var let을 쓰면 .js라는 모듈 내에서만 사용할 수 있다. 
 // 그러나 외부에서는 사용 불가 인것으로 보인다.
email = 'dooley@gmail.com';
console.log(email, global.email);

globalThis.name2 = '둘리';
console.log(name2, globalThis.name2);

// cf
n2 = '두울리';
console.log(n2, global.n2);

console.log("== function의 객체 메소드 apply =============================");
var f1 = function() {
    console.log(this);
};
f1();

// this 바꾸기
var o = {
    name : '또치'
};

f1.apply(o);

console.log("== function의 객체 메소드 call =============================");
var f2 = function(s1, s2) {
    console.log(s1 + " " + s2 + " " + this.name);
}
f2('hi', '');
f2.call(o, 'hi', 'again');
f2.apply(o, ['hi', 'again']);
