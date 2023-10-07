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

import com.example.demo.entity.AdminSignup;
import com.example.demo.service.AdminSignupService;
import com.fasterxml.jackson.core.JsonProcessingException;



@RestController
@RequestMapping("/api/AdminSignupEntitys")
@CrossOrigin

public class AdminSignupController {

	@Autowired
	private AdminSignupService ss;
	
	 @GetMapping("/getAdminsignup")
	 public List<AdminSignup> getAdminSignupDetails()
	 {
		 return ss.getAdminSignupDetails();
	 }
	 @PostMapping("/postAdminsignup")
	 public void saveData(@RequestBody AdminSignup se)
	 {
		 ss.saveData(se);
	 }
	 
	 @PutMapping("/putAdminsignup/{name}")
	 public void updateData(@PathVariable String name, @RequestBody AdminSignup se) {
	     se.setName(name);
	     ss.updateData(se);
	 }

	 @DeleteMapping("/deleteAdminsignup/{name}")
	 public void DeleteData(@PathVariable String name) {
	     ss.deleteData(name);
	 }

	 
	
	
}