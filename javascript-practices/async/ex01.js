const fetch = function(param, callback){
    
    // 비동기 코드 : 파일 시스템 접근, 네트워크 통신, SQL to DB, setTimeout

    // 비동기 동작 후 callback

    // callback(error, res) 형태를 가져야한다. 그리고 error, res에 맞는 반환을 해야한다.

    setTimeout(() => {
        if (param === 'param-data'){
            callback(null, 'ok'); // error , res
        } else {
            callback(new Error('fail') , null);
        }
    }, 2000);

    // if (param === 'param-data'){
    //     setTimeout(() => {
    //         callback(null, 'ok'); // error , res
    //     }, 2000);
    // } else {
    //     callback(new Error('fail') , null);
    // }
    
}
// test01 : success
fetch('param-data', (error, res) => {
    if(error) {
        console.error(error); // error
    } else {
        console.log(res); // res
    }
});

// test01 : fail
fetch('param-error', (error, res) => {
    if(error) {
        console.error(error); // error
    } else {
        console.log(res); // res
    }
});

console.log("wait...");

/*
res = ex01();
console.log(res);
console.log("wait...")
느낌으로 짜야한다???

// fetch를 무한으로 즐겨야함...
fetch('param-error', (error, res) => {
    if(error) {
        console.error(error); // error
    } else {
        fetch('param-error', (error, res) => {
            if(error) {
                console.error(error); // error
            } else {
                fetch('param-error', (error, res) => {
                    if(error) {
                        console.error(error); // error
                    } else {
                        fetch(...)
                    }
                });
            }
        });
    }
});

---------------------------

res1 = fetch();


*/