/*

name & unamed export

*/

const add01 = function (a, b){
    return a+b;
}

const subtract = function (a, b){
    return a-b;
}

const devide = function(a,b) {
    return a/b;
}

export { add01, subtract, devide } // 분해가 가능

export default { add01, subtract } // 분해가 안됨 (myObject 처럼 객체로 ex08.02)