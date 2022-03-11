/**
 * 
 * Arrow Function
 * 
 */

const power01 = function(x) {
    return x * x;
}

const numbers = [1,2,3,4,5];
numbers.forEach(function(n){
    //console.log(`${n} : ${power(n)}`);
    process.stdout.write(`${n} : ${power01(n)}\t`);
});

// ex01
console.log("\n------\n");
const power02 = x => x*x;

numbers.forEach(function(n){
    process.stdout.write(`${n} : ${power02(n)}\t`);
});

// ex02
console.log("\n------\n");

numbers.forEach(function(x){
    process.stdout.write(`${x} : ${(x => x*x)(x)}\t`);
});


// ex03 
console.log("\n------\n");

numbers.forEach(x => process.stdout.write(`${x} : ${(x => x*x)(x)}\t`));

// ex04 : this를 어휘적으로 바인딩 가능하다.
console.log("\n------\n");

const dooly01 = {
    name : '둘리',
    friends : ['마이콜', '희동이', '도우너', '또치'],
    printFriends : function() {
        this.friends.forEach(function(f){
            console.log(`${this.name}의 친구 ${f}`);
        }.bind(this)) // 화살표는 바인딩 안해도 된다.
    }
}

dooly01.printFriends();

const dooly02 = {
    name : '둘리',
    friends : ['마이콜', '희동이', '도우너', '또치'],
    printFriends : function() {
        this.friends.forEach((f) => {
            console.log(`${this.name}의 친구 ${f}`);
        })
    }
}

dooly02.printFriends();