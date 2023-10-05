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

import com.example.demo.entity.AdminLogin;
import com.example.demo.service.AdminLoginService;
import com.fasterxml.jackson.core.JsonProcessingException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/api/AdminLoginEntitys")
@CrossOrigin
public class AdminLoginController {

	@Autowired
	private AdminLoginService ls;
	
	@GetMapping("/getAdminlogin")
	public List<AdminLogin> getAdminLoginDetails()
	{
		return ls.getAdminLoginDetails();
	}
	@PostMapping("/postAdminlogin")
	public void saveData(@RequestBody AdminLogin le)
	{
		ls.saveData(le);
	}
	
	@PutMapping("/putAdminlogin")
	public void updateData(@RequestBody AdminLogin le, @RequestParam(required = false) String id)
	{
	    if (id != null) {
	        le.setUsername(id);
	    }
	    ls.updateData(le);
	}

	@DeleteMapping("/deleteAdminlogin/{id}")
	public void DeleteData(@PathVariable String id)
	{
		ls.deleteData(id);
	}
	
}

