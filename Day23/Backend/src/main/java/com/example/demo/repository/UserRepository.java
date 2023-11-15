package com.example.demo.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity,String>{

}






