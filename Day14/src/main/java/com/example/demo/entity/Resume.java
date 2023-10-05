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
@Table(name="Resume")
public class  Resume{

	@Id 
	private Long id;
	private String name;
	private String email;
	private String education;
	private String skills;
    private String academic;
    private String projects;
	private String engineering;
	private String experience;
	private String activities;
	private String honors;
	private String interests;
}
