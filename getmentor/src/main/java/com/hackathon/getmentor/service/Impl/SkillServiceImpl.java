package com.hackathon.getmentor.service.Impl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackathon.getmentor.model.Skill;
import com.hackathon.getmentor.repository.SkillRepository;
import com.hackathon.getmentor.service.SkillService;

@Service
public class SkillServiceImpl implements SkillService{

	@Autowired
	private SkillRepository skillRepository;
	
	@Override
	public Skill createSkill(String skillname) {
			
		Skill skill = new Skill();
		skill.setSkillName(skillname);
		skillRepository.save(skill);
		return skill;
	}
	
	@Override
	public List<Skill> getAllSkills() {
		return skillRepository.findAll();
	}
	
}
