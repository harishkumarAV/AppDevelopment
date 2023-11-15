package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.JobPosting;
import com.example.demo.service.JobPostingService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class JobPostingController {
    @Autowired
    private JobPostingService jobPostingService;

    @GetMapping("/searchJob")
    public List<JobPosting> getAllJobPostings() {
        return jobPostingService.getAllJobPostings();
    }
    @GetMapping("/job/{id}") 
    public ResponseEntity<JobPosting> getJobPostingById(@PathVariable Long id) {
        JobPosting jobPosting = jobPostingService.getJobPostingById(id);

        if (jobPosting != null) {
            return ResponseEntity.ok(jobPosting);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/createJob")
    public JobPosting createJobPosting(@RequestBody JobPosting jobPosting) {
        return jobPostingService.createJobPosting(jobPosting);
    }
}
