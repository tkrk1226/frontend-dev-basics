/**
 * 
 * let : Block Scope의 변수
 * 
 */

// try {

//     if(true){
//         var i = 10; // 함수 안이 아니기 때문에 사실상 전역
//         let j = 20;
//     }

//     console.log(i, j);

// } catch (e) {
//     console.error('error : ' + e);
// }

// cf. var의 함수 범위

try{
    let f = function(){
        var m = 20;
    }
    
    f();
    
    console.log(m);
} catch (e) {
    console.error('error : ' + e);
}
