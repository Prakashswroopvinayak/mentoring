package com.hackathon.getmentor.controller;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.getmentor.model.Mentor;
import com.hackathon.getmentor.model.Roles;
import com.hackathon.getmentor.model.User;
import com.hackathon.getmentor.model.UserRole;
import com.hackathon.getmentor.repository.UserRepository;
import com.hackathon.getmentor.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/")
	public User CreateUser(@RequestBody User user) throws Exception{
		user.setProfile("profile.png");
		String encodedPassword = this.bCryptPasswordEncoder.encode(user.getPassword());
		user.setPassword(encodedPassword);
		Set<UserRole> roles = new HashSet<>();
		Roles role = new Roles();
		role.setRoleId(5L);
		role.setRoleName("USER");
		UserRole ur = new UserRole();
		ur.setUser(user);
		ur.setRoles(role);		
		roles.add(ur);
		return this.userService.createUser(user, roles);
	}
	
	@GetMapping("/getmentor/{username}")
	public Map<String,Long> getMentor(@PathVariable("username") String username) {
		System.out.println("findmentor");
		return this.userService.getMentor(username);
	}
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
		return this.userService.getUser(username);
	}
	
	@DeleteMapping("/{userId}")
	public void deleteUser(@PathVariable("userId") Long userId) {
		this.userService.deleteUser(userId);
	}	
}
