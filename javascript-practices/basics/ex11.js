/**
 * Array 메서드 (Array.prototype)
 */

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'orange', 'mango'];

// concat
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push : stack 지원
var color = colors.pop();
console.log(color, colors);

colors.push('red');
console.log(colors);

// join 
var str = fruits.join(":");
console.log(str);

// revertse
console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift
var numbers = [1000, 3000, 2000, 5000, 4000, 8000];
var number = numbers.shift();
console.log(number, numbers);

// sort
numbers.sort();
console.log(numbers);

// slice
var getSlice = numbers.slice(1, 3); // slice 배열 index의 ` ~ (3-1) 까지 가져온다.
console.log(getSlice);

// splice
// index 부터 count 개를 삭제한 후, 삭제된 요소를 반환
console.log(fruits);
var fruits2 = fruits.splice(0/*index*/, 2/*count*/);
console.log(fruits2, fruits);

// index 부터 count 개를 삭제한 후, relpace로 대체, 삭제된 요소를 반환
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1/*index*/, 3/*count*/, 10,10,10/*relpacae*/);
console.log(a2, a1);

// a1.removeAt(1)
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1, 1);
console.log(a2, a1);

var a1 = [0,1,2,3,4];
var a2 = a1.splice(1, 0, 10);
console.log(a2, a1);


