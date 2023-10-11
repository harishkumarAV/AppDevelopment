package com.example.demo.service;



import java.util.List;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Resume;
import com.example.demo.repository.ResumeRepository;

@Service
public class ResumeService {

	@Autowired
	private ResumeRepository lr;
	
	public List<Resume> getResumeDetails(){
		return lr.findAll();
	}
	public void saveData(Resume le)
	{
		lr.save(le);
	}
	
	public void updateData(Resume le)
	{
		lr.save(le);
	}
	
	public void deleteData(String id)
	{
		lr.deleteById(id);	
	}

}
