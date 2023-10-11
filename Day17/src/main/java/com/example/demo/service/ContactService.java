package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Contact;
import com.example.demo.repository.ContactRepository;

@Service
public class ContactService {
	@Autowired
	private ContactRepository ur;
	
	public List<Contact> getUserDetails(){
		return ur.findAll();
	}
	public void saveData(Contact ue)
	{
		ur.save(ue);
	}
	
	public void updateData(Contact ue)
	{
		ur.save(ue);
	}
	
	public void deleteData(String id)
	{
		ur.deleteById(id);	
	}

}
