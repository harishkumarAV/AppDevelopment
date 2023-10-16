package com.example.demo.service;
import org.apache.el.stream.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.JobPosting;
import com.example.demo.repository.JobPostingRepository;

import java.util.List;

@Service
public class JobPostingService {
    @Autowired
    private JobPostingRepository repository;

    public List<JobPosting> getAllJobPostings() {
        return repository.findAll();
    }
    public JobPosting getJobPostingById(Long id) {
        JobPosting jobPosting = repository.findById(id).orElse(null);
        return jobPosting;
    }


    public JobPosting createJobPosting(JobPosting jobPosting) {
        return repository.save(jobPosting);
    }
}
