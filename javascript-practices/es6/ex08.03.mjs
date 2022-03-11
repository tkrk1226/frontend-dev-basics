/**
 * 
 * named export I
 * 
 * exports(require.js)와 유사하다. 
 * 
 * 이 모듈을 import 할 때에는 Destructing이 가능하다. (객체 분해)
 * 
 */

export const add = function (a, b){
    return a+b;
}

export const subtract = function (a, b){
    return a-b;
}