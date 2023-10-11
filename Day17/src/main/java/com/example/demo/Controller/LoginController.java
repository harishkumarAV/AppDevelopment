package com.example.demo.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.request.AuthenticationRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.AuthenticationResponse;
import com.example.demo.entity.Login;
import com.example.demo.service.AuthenticationService;
import com.example.demo.service.LoginService;


@RestController
@RequestMapping("/api/LoginEntitys")
@CrossOrigin(origins = "http://localhost:3000") 
public class LoginController {

	
	@Autowired
	private LoginService ls;
	@Autowired
	private AuthenticationService service;
	
	 @PostMapping("/getlogin")
	 public AuthenticationResponse getLoginDetails(@RequestBody RegisterRequest request)
	 {
		 return service.register(request);
	 }
	 @PostMapping("/postlogin")
	 public AuthenticationResponse saveData(@RequestBody AuthenticationRequest request)
	 {
		 return service.authenticate(request);
	 }
	 
	 @PutMapping("/putlogin/{id}")
	 public void updateData(@RequestBody Login le,@PathVariable String id)
	 {
		 le.setUsername(id);
		 ls.updateData(le);
	 }
	 @DeleteMapping("/deletelogin/{id}")
	 public void DeleteData(@PathVariable String id)
	 {
		 ls.deleteData(id);
	 }
	 

}
