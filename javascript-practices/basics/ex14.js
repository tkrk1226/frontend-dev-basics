/**
 * URL 다루기
 */

//var url1 = "http://www.mysite.com/user?name=둘리야?&no=10";
var url1 = "http://www.mysite.com/user?name=둘리야?&no=10";

// 이스케이프를 해줘야한다. ? , ... 문제있는 요소들을...
// location.href = url1;

// 1. escape : URL 전부를 Encoding, 사용(X), deprecated
var url2 = escape(url1);
console.log(url2);

// 2. encodeURI : parameter만 encoding, 사용(O)
var url3 = encodeURI(url1);
console.log(url3);
// locataion.href = encodeURI(url1); ??

// 3. encodeURIComponent : 값만 Encoding 해야하는 경우, 사용(O)
var url4 = encodeURIComponent(url1); // 잘못 사용한 경우
console.log(url4); 

// 4. 만들어야 할 URL
// http://mysite.com/user?no=10&name=둘리&email=dooly@gmail.com

var url = "http://mysite.com/user";

var params = {
    name : '둘리',
    email : 'dooly@gmail.com',
    no : 10
};

// var toQueryString = function(o){
//     var qs = "";
//     for(prop in o){
//      qs += (prop + "=" + encodeURIComponent(o[prop]) + "&"); 
//     } // encodeURIComponent의 제대로 된 사용
//     return qs;
// }


var toQueryString = function(o){
    var qs = [];
    for(prop in o){
     qs.push(prop + "=" + encodeURIComponent(o[prop])); 
    } // encodeURIComponent의 제대로 된 사용
    return qs.join("&");
} // join을 활용해 &를 주입

var s = toQueryString(params);
console.log(s);

var url5 = url + "?" + toQueryString(params);
console.log(url5);

/*

jQuery = function() {};

// jQuery 는 DOM element를 조작한다???

$ = jQuery;
$obj = $(""); // $마크를 붙인 이유는 jQuery Object임을 명시하기 위해 구분해 놓은 것이다.
$.ajax({
    url: url,
    type: 'post',
    data: toQueryString(o)
    //dataType: 'form-data', ... // name=value&name=value&... 구조를 의미
})

*/