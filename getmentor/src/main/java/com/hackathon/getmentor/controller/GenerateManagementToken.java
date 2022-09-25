package com.hackathon.getmentor.controller;
import java.time.Instant;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/managementtoken")
public class GenerateManagementToken {
	
	@PostMapping("/")
	private String generateManagementToken() {
		String secret = "2iSBTFI_cygdpT99cFstK_7f9vKWMFyg20npzaY9lm1u7TAWb8Sa0w_GMmU3QGS6XL_Q685WKQg4rScnkmEfrCHVakwgwVHCJXqWCv8dftJMvnxUsGnHwE3S1rig1chVrfKNS_8AcB8GJR3zmbXttDJwyX08uzLzcqzl8Xl-TmE=";
	    Map<String, Object> payload = new HashMap<>();
	    payload.put("access_key", "61c231a7c7e155a0efae680a");
	    payload.put("type", "management");
	    payload.put("version", 2);
	    String token = Jwts.builder().setClaims(payload).setId(UUID.randomUUID().toString())
	        .setExpiration(new Date(System.currentTimeMillis() + 86400 * 1000))
	        .setIssuedAt(Date.from(Instant.ofEpochMilli(System.currentTimeMillis() - 60000)))
	        .setNotBefore(new Date(System.currentTimeMillis()))
	        .signWith(SignatureAlgorithm.HS256, secret.getBytes()).compact();
	    return token;
	  }

}
