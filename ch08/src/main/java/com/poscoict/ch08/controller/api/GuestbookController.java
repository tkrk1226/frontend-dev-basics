package com.poscoict.ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	@ResponseBody
	@RequestMapping(value="/list", method=RequestMethod.GET) // ternalling이 되지 않도록 url setting 필요
	public JsonResult ex01(@RequestParam(value="sn", required = true, defaultValue = "-1") Long no) {

//		guestbookService.findAll(no);
		
		List<GuestbookVo> list = new ArrayList<>();
		
		GuestbookVo vo1 = new GuestbookVo();
		GuestbookVo vo2 = new GuestbookVo();
		GuestbookVo vo3 = new GuestbookVo();
		
		vo1.setNo(3L);
		vo1.setName("둘리3");
		vo1.setMessage("안녕3");
		list.add(vo1);

		vo2.setNo(2L);
		vo2.setName("둘리2");
		vo2.setMessage("안녕2");
		list.add(vo2);

		vo3.setNo(1L);
		vo3.setName("둘리1");
		vo3.setMessage("안녕1");
		list.add(vo3);

		return JsonResult.success(list); 
	}
	
}
