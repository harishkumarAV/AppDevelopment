package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
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
@Table(name="Signup")
public class Signup {

	@Id 
	@Column(name="name")
	private String name;
	@Column(name="emailid")
	private String mail;
	@Column(name="password")
	private String password;
	@Column(name="confirmpassword")
	private String confirmPassword;
}
