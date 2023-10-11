
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

import com.example.demo.entity.Resume;
import com.example.demo.service.ResumeService;
import com.fasterxml.jackson.core.JsonProcessingException;



@RestController
@RequestMapping("/api/ResumeEntitys")
@CrossOrigin(origins = "http://localhost:3000") 
public class ResumeController {

	
	@Autowired
	private ResumeService ls;
	
	 @GetMapping("/getResume")
	 public List<Resume> getResumeDetails()
	 {
		 return ls.getResumeDetails();
	 }
	 @PostMapping("/postResume")
	 public void saveData(@RequestBody Resume le)
	 {
		 ls.saveData(le);
	 }
	 
	 @PutMapping("/putResume")
	 public void updateData(@RequestBody Resume le,@RequestParam String id)
	 {
		 le.setName(id);
		 ls.updateData(le);
	 }
	 @DeleteMapping("/deleteResume/{id}")
	 public void DeleteData(@PathVariable String id)
	 {
		 ls.deleteData(id);
	 }
	 

}
