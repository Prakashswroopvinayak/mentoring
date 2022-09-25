package com.hackathon.getmentor.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import com.hackathon.getmentor.model.Mentor;
import com.hackathon.getmentor.model.User;

public interface MentorService {
	
	public Mentor createMentor(Mentor mentor, String username, List<Integer> Skills);
	
	public Mentor getMentor(Long id);
	
	public List<Mentor> getTopMentors();

	public List<Mentor> allMentors();

	public List<String> allSkillsOfMentor(Long mentorid);

	public User getUser(Long mentorid);
}
