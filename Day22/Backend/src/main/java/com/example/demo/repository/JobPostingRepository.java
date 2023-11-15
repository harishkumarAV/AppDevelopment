package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.JobPosting;

public interface JobPostingRepository extends JpaRepository<JobPosting, Long> {
}
