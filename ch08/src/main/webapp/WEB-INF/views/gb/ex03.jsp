<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
<script type="text/javascript" src="${pageContext.request.contextPath}/jquery/jquery-3.6.0.js"></script>
<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
<script type="text/javascript">

var render = function(vo) { // vo is data
	
	// data binding을 위한 rendering 중
	var html = 				
	"<li data-no='"+ vo.no + "'>" + 
	"<strong>" + vo.name + "</strong>" + 
	"<p>" + vo.message + "</p>" + 
	"<strong></strong>" + 
	"<a href='' data-no='" + vo.no + "'>삭제</a>" +  
	"</li>";
	
	return html;	
}

//최초의 no
//var startNo = -1; 

var fetch = function(){			
	$.ajax({
		url: '${pageContext.request.contextPath}/api/guestbook/list', //startNo
		type:'get',
		dataType:'json',
		success : function(response){
			if(response.result !== 'success'){
				console.error(response.message);
				return;
			}
			
			var startNo = 0;
			for(var i = 0; i < response.data.length; i++){
				var vo = response.data[i];
				var html = render(vo);
				$("#list-guestbook").append(html);
				//startNo = response.data[i].no;
			}
		}
	});
}

$(function(){

	// ... 
	// ...
	// ...
	
	var dialogDelete = $("#dialog-delete-form").dialog({
		autoOpen: false,
		modal: true,
		buttons: {
			"삭제": function(){
				var no = $("#hidden-no").val();
				var password = $("#password-delete");
				var url = "${pageContext.request.contextPath}/api/guestbook/delete/" + no;
				
				$.ajax({
					url: url,
					type:'post',
					dataType:'json',
					data:"password"+password,
					success: function(response){

						if(response.result !== 'success'){
							console.error(response.message);
							return;
						}
						
						// 삭제 안된 경우
						if(response.data == -1){
							// 하위가 아니라 종속임
							$(".validateTips.error").show();
							$("#password-delete").val("").focus();
							return;
						}
						
						// 삭제 된 경우
						$("#list-guestbook li[data-no='" + response.data + "']").remove();
						dialogDelete.dialog('close');
						
						console.log(response);
						
					}
				});
			},
			"취소": function(){
				$(this).dialog('close');	
			}
		},
		close: function(){
			$(".validateTips.error").hide();
			$("#password-delete").val("");
			$("#hidden-no").val("");
	
		}
	});
			
	// 글 삭제 버튼 Click 이벤트 처리 (Live Event)
	// click event가 Element에 생길거라는 것을 알려주고 위임
	$(document).on("click", "#list-guestbook li a", function(){
		event.preventDefault();
		var no = $(this).data("no");
		console.log(no);
		$("#hidden-no").val(no);
		dialogDelete.dialog('open');
	});
	
	// 최초 리스트 가져오기
	fetch();
	
	// api call을 하고 그려지는 건 시간이 좀 필요하다. DOM이 다 만들어져야하므로 코드 순서의 문제가 아니라 
	// 나중에 생길 element에 대해 mapping을 시켜야함.
	// 그렇게 하기 위해서는 document에게 역할을 위임해야한다.
	
});
</script>
</head>
<body>
			<div id="guestbook">
				<h1>방명록</h1>
				<form id="add-form" action="" method="post">
					<input type="text" id="input-name" placeholder="이름">
					<input type="password" id="input-password" placeholder="비밀번호">
					<textarea id="tx-content" placeholder="내용을 입력해 주세요."></textarea>
					<input type="submit" value="보내기" />
				</form>
				<ul id="list-guestbook">

				</ul>
			</div>
			<div id="dialog-delete-form" title="메세지 삭제" style="display:none">
  				<p class="validateTips normal">작성시 입력했던 비밀번호를 입력하세요.</p>
  				<p class="validateTips error" style="display:none">비밀번호가 틀립니다.</p>
  				<form>
 					<input type="password" id="password-delete" value="" class="text ui-widget-content ui-corner-all">
					<input type="hidden" id="hidden-no" value="">
					<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
  				</form>
			</div>
</body>
</html>