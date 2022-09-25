package com.hackathon.getmentor.service.Impl;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackathon.getmentor.model.Mentor;
import com.hackathon.getmentor.model.User;
import com.hackathon.getmentor.model.UserRole;
import com.hackathon.getmentor.repository.RolesRepository;
import com.hackathon.getmentor.repository.UserRepository;

import com.hackathon.getmentor.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RolesRepository rolesRepository;
	
	//user creation
	@Override
	public User createUser(User user, Set<UserRole> userRoles) {
		//System.out.println(user.getUsername()+" "+user.getEmail());
		User local = this.userRepository.findByUsername(user.getUsername());
		System.out.println("local = "+local);
		if(local != null) {
				System.out.println("User already Registered. Please Login");
				//throw new Exception("User already exists");
				
		}else {
			for(UserRole ur :userRoles) {
				rolesRepository.save(ur.getRoles());
				
			}
			user.getUserRoles().addAll(userRoles);
			local = this.userRepository.save(user);
			
		}//user roles are automatically getting saved due to cascade All used
		return local;
	}
	
	@Override
	public User getUser(String username) {
		User user = this.userRepository.findByUsername(username);
		//System.out.print(user);
		return user;
	}
	
	@Override
	public void deleteUser(Long userId) {
		this.userRepository.deleteById(userId);
	}
	
	@Override
	public Map<String,Long> getMentor(String username) {
		Mentor mentor = this.userRepository.findByUsername(username).getMentor();
		Map<String,Long> mp = new HashMap<String, Long>();
		if(mentor == null) {
			mp.put("mentor", -1L);
		}else {
			mp.put("mentor", mentor.getId());
		}
		return mp;
	}	
}
