package com.example.demo.Controller;


import java.util.List;



import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.request.AuthenticationRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.AuthenticationResponse;
import com.example.demo.entity.Login;
import com.example.demo.entity.Signup;
import com.example.demo.service.AuthenticationService;
import com.example.demo.service.LoginService;
import com.example.demo.service.SignupService;
import com.fasterxml.jackson.core.JsonProcessingException;



@RestController
@RequestMapping("/api/SignupEntitys")
@CrossOrigin(origins = "http://localhost:3000") 

public class SignupController {

	@Autowired
	private SignupService ss;
	
	@Autowired
	private AuthenticationService service;
	
	 @PostMapping("/getsignup")
	 public String  getSignupDetails(@RequestBody RegisterRequest request)
	 {
		 AuthenticationResponse userDetail =  service.register(request);
		 if(userDetail!=null)
		 {
			 return "created succesfully";
		 }
		 else
		 {
			 return "error occured";
		 }
	 }
	 @PostMapping("/postsignup")
	 public AuthenticationResponse saveData(@RequestBody AuthenticationRequest  se)
	 {
		 return service.authenticate(se);
	 }
	 
	 @PutMapping("/putsignup/{name}")
	 public void updateData(@PathVariable String name, @RequestBody Signup se) {
	     se.setUsername(name);
	     ss.updateData(se);
	 }

	 @DeleteMapping("/deletesignup/{name}")
	 public void DeleteData(@PathVariable String name) {
	     ss.deleteData(name);
	 }

	 
	
	
}