package com.example.demo.service;



import java.util.List;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.AdminLogin;
import com.example.demo.repository.AdminLoginRepository;

@Service
public class AdminLoginService {

	@Autowired
	private AdminLoginRepository lr;
	
	public List<AdminLogin> getAdminLoginDetails(){
		return lr.findAll();
	}
	public void saveData(AdminLogin le)
	{
		lr.save(le);
	}
	
	public void updateData(AdminLogin le)
	{
		lr.save(le);
	}
	
	public void deleteData(String id)
	{
		lr.deleteById(id);	
	}

}
