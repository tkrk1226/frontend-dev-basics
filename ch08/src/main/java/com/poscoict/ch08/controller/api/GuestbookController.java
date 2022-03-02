package com.poscoict.ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.poscoict.ch08.controller.dto.JsonResult;
import com.poscoict.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api/guestbook")
public class GuestbookController {

	@ResponseBody
	@RequestMapping(value="/add", method=RequestMethod.POST) // ternalling이 되지 않도록 url setting 필요
	public JsonResult ex01(@RequestBody GuestbookVo vo) {
	
//		guestbookService.addMessage(vo);
		vo.setNo(1L);
		vo.setPassword("");
		
//		db setting, rendering
		return JsonResult.success(vo); 
	}
	
}
