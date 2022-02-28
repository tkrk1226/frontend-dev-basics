package com.poscoict.ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

// 동일이름 등록으로 인한 Error 방지
@Controller("apiTestController")
@RequestMapping("/test")
public class ApiController {

	@RequestMapping("/text")
	public String text() {
		return "text";
	}
	
	@RequestMapping("/html")
	public String html() {
		return "html";
	}
	
	@RequestMapping("/json01")
	public String json01() {
		return "json01";
	}

	@RequestMapping("/json02")
	public String json02() {
		return "json02";
	}
	
}
