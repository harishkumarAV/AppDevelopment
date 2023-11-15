package com.example.demo.entity;

import java.util.Collection;

import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.demo.entity.enumerate.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Builder

@NoArgsConstructor
@AllArgsConstructor
@Table(name="Signup")
public class Signup implements UserDetails {

	@Id 
	@Column(name="name")
	private String username;
	@Column(name="emailid")
	private String emailid;
	@Column(name="mobileno")
	private String mobileno;
	@Column(name="password")
	private String password;
	 @Enumerated(EnumType.STRING)
		private Role role;
	 public Collection<? extends GrantedAuthority> getAuthorities() {
			// TODO Auto-generated method stub
			return List.of(new SimpleGrantedAuthority(role.name()));
		}

		@Override
		public String getPassword() {
			// TODO Auto-generated method stub
			return password;
		}
		@Override
		public String getUsername() {
			// TODO Auto-generated method stub
			return username;
		}
		@Override
		public boolean isAccountNonExpired() {
			// TODO Auto-generated method stub
			return true;
		}
		@Override
		public boolean isAccountNonLocked() {
			// TODO Auto-generated method stub
			return true;
		}
		@Override
		public boolean isCredentialsNonExpired() {
			// TODO Auto-generated method stub
			return true;
		}

		@Override
		public boolean isEnabled() {
			// TODO Auto-generated method stub
			return true;
		}

}
