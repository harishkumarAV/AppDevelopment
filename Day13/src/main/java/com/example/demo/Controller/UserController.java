package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.UserEntity;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/api/UserEntitys")
@CrossOrigin

public class UserController {
	@Autowired
	private UserService us;
	
	 @GetMapping("/getuser")
	 public List<UserEntity> getUserDetails()
	 {
		 return us.getUserDetails();
	 }
	 @PostMapping("/postuser")
	 public void saveData(@RequestBody UserEntity ue)
	 {
		 us.saveData(ue);
	 }
	 
	 @PutMapping("/putuser")
	 public void updateData(@RequestBody UserEntity ue,@RequestParam String id)
	 {
		 ue.setEmail(id);
		 us.updateData(ue);
	 }
	 @DeleteMapping("/deleteuser")
	 public void DeleteData(@RequestBody UserEntity ue,@RequestParam String id)
	 {
		 us.deleteData(id);
	 }
	 

}
