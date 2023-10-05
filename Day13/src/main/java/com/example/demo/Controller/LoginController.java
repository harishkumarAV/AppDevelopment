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

import com.example.demo.entity.Login;
import com.example.demo.service.LoginService;
import com.fasterxml.jackson.core.JsonProcessingException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/api/LoginEntitys")
@CrossOrigin(origins = "http://localhost:3000") 
public class LoginController {

	
	@Autowired
	private LoginService ls;
	
	 @GetMapping("/getlogin")
	 public List<Login> getLoginDetails()
	 {
		 return ls.getLoginDetails();
	 }
	 @PostMapping("/postlogin")
	 public void saveData(@RequestBody Login le)
	 {
		 ls.saveData(le);
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
