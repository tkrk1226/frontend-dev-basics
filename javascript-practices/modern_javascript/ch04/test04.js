var power = function(num) {
    return num * num;
}

function square(num) {
    return num * num;
}

console.log(power(10));
console.log(typeof(power));
console.log(square(10));
console.log(typeof(square));

 function sum() {
    console.log(arguments);
    var result = 0;
    Array.prototype.forEach.call(arguments, function(e){
        result += e;
    });
    return result;
}

setBall

console.log(sum(10,20,30,40,50,60));