
package com.example.demo.service;

import java.util.List;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Login;
import com.example.demo.repository.LoginRepository;

@Service
public class LoginService {

	@Autowired
	private LoginRepository lr;
	
	public List<Login> getLoginDetails(){
		return lr.findAll();
	}
	public void saveData(Login le)
	{
		lr.save(le);
	}
	
	public void updateData(Login le)
	{
		lr.save(le);
	}
	
	public void deleteData(String id)
	{
		lr.deleteById(id);	
	}

}
