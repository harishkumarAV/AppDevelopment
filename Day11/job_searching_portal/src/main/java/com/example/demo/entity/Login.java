package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Login")
public class Login {
	@Id 
    @GeneratedValue(strategy = GenerationType.AUTO) 

	private Long userId;
	
	
	@Column(name="username")
	private String username;
	@Column(name="password")
	private String password;
	
}
