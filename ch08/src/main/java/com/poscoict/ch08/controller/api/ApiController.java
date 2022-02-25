package com.poscoict.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poscoict.ch08.controller.dto.JsonResult;
import com.poscoict.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {

	@ResponseBody
	@RequestMapping("/text")
	public String text() {
		
		return "TEXT 데이터";
	}
	
	@ResponseBody
	@RequestMapping("/html")
	public String html() {
		
		return "<h1>AJAX 연습</h1><p>HTML 데이터</p>";
	}
	
	@ResponseBody
	@RequestMapping(value="/json", method=RequestMethod.GET)
	public JsonResult json() {

		// 객체 매핑을 Message Converter에서 못하므로 Error가 나오는 상황
		// Jackson을 설정해서 한글이 변환되도록 해야한다.
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이");
		
		//JsonResult jsonResult = new JsonResult();
		//jsonResult.setResult("ok");
		
		return JsonResult.success(vo);
//		return JsonResult.fail("Exception....");
	}
	
}
