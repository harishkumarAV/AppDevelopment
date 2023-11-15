package com.example.demo.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.JobApplication;
import com.example.demo.repository.JobApplicationRepository;
import com.example.demo.service.JobApplicationService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class JobApplicationController {
    @Autowired
    private JobApplicationService service;

    @PostMapping("/applyJob")
    public String applyJob(@RequestBody JobApplication jobApplication) {
        return service.saveJob(jobApplication);
    }

    @GetMapping("/jobApplication")
    public List<JobApplication> getAllJobApplications() {
        return service.findJob();
    }

    @GetMapping("/jobApplication/{id}")
    public JobApplication getJobApplicationById(@PathVariable Long id) {
        return service.getJob(id).orElse(null);
    }

}
