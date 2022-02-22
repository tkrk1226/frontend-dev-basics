/**
 * Date 객체 메소드(Date.prototype.*)
 */

// 현재 시간
var now = new Date();
console.log(now);

// 2022년 22-22 
var d1 = new Date(2022, 1/*month*/, 22);
console.log(d1);


// 2022년 22-22 22:22
var d2 = new Date(2022, 1/*month*/, 22, 22, 22, 22);
console.log(d2);

// 객체 메소드
console.log(
    "년도 : " + (now.getFullYear()) + "\n" +
    "월 : " + (now.getMonth() + 1) + "\n" +
    "일 : " + (now.getDate()) + "\n" +
    "시 : " + (now.getHours()) + "\n" +
    "분 : " + (now.getMinutes()) + "\n" +
    "초 : " + (now.getSeconds()) + "\n" +
    "밀리초 : " + (now.getMilliseconds())
);

d2.setFullYear(2024);
console.log(d2);

d2.setMonth(11); // 12월 - 1
console.log(d2);

