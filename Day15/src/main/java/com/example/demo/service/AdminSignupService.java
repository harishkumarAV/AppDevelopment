package com.example.demo.service;



import java.util.List;


import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.AdminSignup;
import com.example.demo.repository.AdminSignupRepository;

@Service
public class AdminSignupService {

	@Autowired
	private AdminSignupRepository sr;
	
	public List<AdminSignup> getAdminSignupDetails(){
		return sr.findAll();
	}
	public void saveData(AdminSignup se)
	{
		sr.save(se);
	}
	
	public void updateData(AdminSignup se) {
	    sr.save(se);
	}

	public void deleteData(String name) {
	    sr.deleteById(name);
	}

}
