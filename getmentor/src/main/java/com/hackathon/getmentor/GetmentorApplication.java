package com.hackathon.getmentor;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.hackathon.getmentor.model.Roles;
import com.hackathon.getmentor.model.User;
import com.hackathon.getmentor.model.UserRole;
import com.hackathon.getmentor.service.UserService;

@SpringBootApplication
public class GetmentorApplication implements CommandLineRunner{
	
	@Autowired
	private UserService userService; 
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public static void main(String[] args) {
		SpringApplication.run(GetmentorApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*User user = new User();
		user.setFirstname("nik");
		user.setLastname("nik");
		user.setUsername("nik");
		user.setEmail("nik@gmail.com");
		String str = this.bCryptPasswordEncoder.encode("nikniknik");
		user.setPassword(str);
		user.setProfile("");
		
		Roles role1 = new Roles();
		role1.setRoleId(1L);
		role1.setRoleName("ADMIN");
		Set<UserRole> urSet = new HashSet<>();
		
		UserRole ur = new UserRole();
		ur.setRoles(role1);
		ur.setUser(user);
		urSet.add(ur);
		//role1.setUserRoles(urSet);
		
		User user1 = this.userService.createUser(user, urSet);
		System.out.print(user1);
		*/
	}
}
