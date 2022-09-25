package com.hackathon.getmentor.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.getmentor.model.Skill;

public interface SkillRepository extends JpaRepository<Skill, Integer> {
	public Skill findById(int id);

}
