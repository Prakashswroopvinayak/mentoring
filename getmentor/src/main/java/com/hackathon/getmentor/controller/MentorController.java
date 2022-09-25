package com.hackathon.getmentor.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.getmentor.model.Mentor;
import com.hackathon.getmentor.model.User;
import com.hackathon.getmentor.service.MentorService;
import com.hackathon.getmentor.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/mentor")
public class MentorController {
	
	@Autowired
	private MentorService mentorService;
	
	@PostMapping("/")
	public Mentor CreateUser(@RequestBody Dto dto) throws Exception{
		//System.out.pritln(dto);
		Mentor mentor = dto.mentor;
		this.mentorService.createMentor(mentor, dto.username, dto.skills);
		return mentor;
	}
	@GetMapping("/getmentor/{mentorid}")
	public Mentor getMentor(@PathVariable("mentorid") Long mentorid) {
		return this.mentorService.getMentor(mentorid);
	}
	
	@GetMapping("/mentors")
	public List<Mentor> getAllMentors() {
		return this.mentorService.allMentors();
	}
	
	@GetMapping("/mentors/top")
	public List<Mentor> getTopMentors() {
		return this.mentorService.getTopMentors();
	}
	
	@GetMapping("/getskills/{mentorid}")
	public List<String> getMentors(@PathVariable("mentorid") Long mentorid) {
		return this.mentorService.allSkillsOfMentor(mentorid);
	}
	@GetMapping("/getuser/{mentorid}")
	public User getMentorUser(@PathVariable("mentorid") Long mentorid) {
		return this.mentorService.getUser(mentorid);
	}
	
}
