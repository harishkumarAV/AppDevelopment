package com.example.demo.service;



import java.util.List;


import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Signup;
import com.example.demo.repository.SignupRepository;

@Service
public class SignupService {

	@Autowired
	private SignupRepository sr;
	
	public List<Signup> getSignupDetails(){
		return sr.findAll();
	}
	public void saveData(Signup se)
	{
		sr.save(se);
	}
	
	public void updateData(Signup se) {
	    sr.save(se);
	}

	public void deleteData(String name) {
	    sr.deleteById(name);
	}

}
