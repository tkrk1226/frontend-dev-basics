const fetch = function(param){
    
    return new Promise((resolve, reject) => {

    // 비동기 코드 : 파일 시스템 접근, 네트워크 통신, SQL to DB, setTimeout

        setTimeout(() => {
            if (param === 'param-data'){
                resolve('ok');
            } else {
                reject(new Error('fail'));
            }
        }, 2000);
    })
}

if(require.main == module) {
    // module이라고 나오면 단독실행
    
    // test01 : success
    fetch('param-data').then((res) => {
        console.log(res);
    });

    // test01 : fail
    fetch('param-error').catch((error) => {
        console.error(error);
    });

    // 일반적으로 쓰는 법 (res + error)
    fetch('param...')
        .then(res =>{

        })
        .catch(error => {

        });

    console.log("wait...");
} else {
   module.exports = fetch;
}