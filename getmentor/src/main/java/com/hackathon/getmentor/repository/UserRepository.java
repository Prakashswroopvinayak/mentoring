package com.hackathon.getmentor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.getmentor.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	public User findByUsername(String username);
	
}
