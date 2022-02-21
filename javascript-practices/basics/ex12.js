/**
 * Array 확장(prototype 기반의 확장) : List method 추가!
 */

Array.prototype.remove = function(index) {
    this.splice(index, 1);
}

Array.prototype.insert = function(index, value) {

    if(value instanceof Array){
        // for (var i = 0; i < value.length; i++){
        //     this.splice(index++, 0, value[i]);
        // }

        // value.forEach(function (e, index){
        //     console.log(e, index);
        // });

        // 오류!!!
        // 콜백 안의 this는 예측 못한다. (어휘 상의 this와 일치하지 않는다.)
        // value.forEach(function (e){
        //     this.splice(index++, 0, e);
        // });

        // 해결방법 1
        // var _this = this;
        // value.forEach(function (e){
        //     console.log(this);
        //     // _this.splice(index++, 0, e); // 이 안에서의 this는 그 함수를 호출하는 것이 된다.
        //     // callback 안에서의 this가 어떻게 쓰이는지 제대로 알고 써야한다.
        // });
        
        // 해결방법 2 : 함수의 bind로 함수 실행 때의 this를 세팅 해줄 수 있다.
        value.forEach(function(e){
            this.splice(index++, 0, e);
        }.bind(this));

        // 호출과 동시에 this를 사용하고 싶으면 call, apply를 쓰고 this를 forEach에서 호출하면서 사용하고 싶다면 this를 bind해서 써라!!!

    } else {
        this.splice(index, 0, value);
    }
}

Array.prototype.add = function(value) {
    this.splice(this.length, 0, value);
}

// List로 사용하기
var a = [1, 2, 4];
console.log(a, a.length);
a.insert(2,3);
console.log(a);
a.remove(3);
console.log(a);

a.insert(2, ['a', 'b', 'c']); // 기대 [1, 2, 'a', 'b', 'c']
console.log(a);               // 결과

a.add(100);
console.log(a);


console.log(a);


console.log(a);


console.log(a);