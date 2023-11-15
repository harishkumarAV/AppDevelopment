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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Login;
import com.example.demo.service.ContactService;
import com.example.demo.entity.Contact;

@RestController
@RequestMapping("/api/Contact")
@CrossOrigin

public class ContactController {
	@Autowired
	private ContactService us;
	
	 @GetMapping("/getcontact")
	 public List<Contact> getUserDetails()
	 {
		 return us.getUserDetails();
	 }
	 @PostMapping("/postcontact")
	 public void saveData(@RequestBody Contact ue)
	 {
		 us.saveData(ue);
	 }
	 
	 @PutMapping("/putcontact/{id}")
	 public void updateData(@RequestBody Contact ce,@PathVariable String id)
	 {
		 ce.setEmail(id);
		 us.updateData(ce);
	 }
	 @DeleteMapping("/deletecontact/{id}")
	 public void DeleteData(@PathVariable String id)
	 {
		 us.deleteData(id);
	 }
	 

}
