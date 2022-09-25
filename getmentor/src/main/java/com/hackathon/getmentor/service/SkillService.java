package com.hackathon.getmentor.service;

import java.util.List;

import com.hackathon.getmentor.model.Skill;

public interface SkillService {
	
	public Skill createSkill(String skillname);

	public List<Skill> getAllSkills();

}
