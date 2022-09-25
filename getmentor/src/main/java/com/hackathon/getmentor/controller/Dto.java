package com.hackathon.getmentor.controller;

import java.util.List;

import com.hackathon.getmentor.model.Mentor;

public class Dto {
	public Mentor mentor;
	public String username;
	public List<Integer> skills;
	public Dto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Dto(Mentor mentor, String username, List<Integer> skills) {
		super();
		this.mentor = mentor;
		this.username = username;
		this.skills = skills;
	}	
};
