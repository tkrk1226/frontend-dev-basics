
var factorial = function(n){
    if(n <= 1){
        return n;
    }
    return n * factorial(n - 1);
} 

function fact(n) {
    if (n<=1) return n;
    return n * fact(n-1);
}

console.log("var");
for (var i = 1; i < 10; i++){
    console.log(i + "!= " + factorial(i));
}

console.log("function");
for (var i = 1; i < 10; i++){
    console.log(i + "!= " + fact(i));
}