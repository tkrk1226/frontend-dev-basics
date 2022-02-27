var evens = [ 2, 4, 6, 8];
evens.length = 2;
console.log(evens);

var a = ["A", "B", "C"];
a[3] = "D";
console.log(a, a.length);
delete a[1];
console.log(a, a.length);