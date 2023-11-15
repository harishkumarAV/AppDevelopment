package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.JobApplication;
import com.example.demo.repository.JobApplicationRepository;

import java.util.List;
import java.util.Optional;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepository repo;

	public String saveJob(JobApplication jobApplication) {
		
		repo.save(jobApplication);
		
		return "job added successfully";
	}

	public List<JobApplication> findJob() {
		return repo.findAll();
		
	}

	public Optional<JobApplication> getJob(Long id) {
		return repo.findById(id);
		
	}

    

}
