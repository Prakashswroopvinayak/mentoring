package com.hackathon.getmentor.service;

import java.util.Map;
import java.util.Set;

import com.hackathon.getmentor.model.User;
import com.hackathon.getmentor.model.UserRole;
import com.hackathon.getmentor.model.Mentor;

public interface UserService {
	
	public User createUser(User user, Set<UserRole> userRoles);
	
	public User getUser(String username);
	
	public void deleteUser(Long userId);

	public Map<String,Long> getMentor(String username);
	
}
