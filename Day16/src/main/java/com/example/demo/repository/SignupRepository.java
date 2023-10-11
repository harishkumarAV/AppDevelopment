package com.example.demo.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Signup;
public interface SignupRepository extends JpaRepository<Signup,String>{
	Optional<Signup>findByUsername(String username);
}


