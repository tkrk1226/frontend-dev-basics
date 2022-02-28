package com.poscoict.ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poscoict.ch08.controller.dto.JsonResult;
import com.poscoict.ch08.controller.vo.UserVo;

@RestController
@RequestMapping("/api/user")
public class RestApiController {
	
// 	ResponseEntity로 응답하는게 좋음
// 	ResponseEntity<Uservo>
	@PostMapping("")
	public Object create(@RequestBody UserVo vo) {
		vo.setNo(1L);
		vo.setPassword(""); // password를 빼버려야하는 이유??
		
		return JsonResult.success(vo);
	}
	
	@GetMapping("")
	public Object read() {
		List<UserVo>list = new ArrayList<>();
		
		UserVo vo01 = new UserVo();
		vo01.setNo(1L);
		vo01.setName("둘리");
		list.add(vo01);
		
		UserVo vo02 = new UserVo();
		vo02.setNo(2L);
		vo02.setName("마이콜");
		list.add(vo02);
		
		return JsonResult.success(list);
	}
	
	@GetMapping("/{no}")
	public Object read(@PathVariable("no") Long no) {
		
		System.out.println("no : " + no);
		
		UserVo vo02 = new UserVo();
		vo02.setNo(2L);
		vo02.setName("마이콜");
		
		return JsonResult.success(vo02);
	}
	
//	@Auth
	@PutMapping("/{no}")
	public Object update(
			@PathVariable("no") Long no, 
			@RequestBody UserVo vo) { // @AuthUser UserVo authUser에서 no값을 가져와야함.
		
		System.out.println("no(put) : " + no);
		System.out.println("uservo : " + vo);
		
		vo.setNo(no);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}	
	
	@DeleteMapping("/{no}")
	public Object delete(
			@PathVariable("no") Long no, 
			@RequestParam(value="password", required = true, defaultValue = "")
			String password) { 
		
		System.out.println("no(delete) : " + no);
		System.out.println("password : " + password);
				
		return JsonResult.success(no);
	}	
}
