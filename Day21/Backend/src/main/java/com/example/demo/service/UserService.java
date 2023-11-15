package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.UserEntity;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository ur;
	public UserService(UserRepository ur) {
        this.ur = ur;
    }
	public Optional<UserEntity> getUserDetailsById(String id) {
	    // Retrieve the user by ID and return it as an Optional
	    return ur.findById(id);
	}

	public List<UserEntity> getUserDetails(){
		return ur.findAll();
	}
	public void saveData(UserEntity ue)
	{
		ur.save(ue);
	}

	
	public void updateData(UserEntity ue)
	{
		ur.save(ue);
	}
	
	public void deleteData(String id)
	{
		ur.deleteById(id);	
	}

}
