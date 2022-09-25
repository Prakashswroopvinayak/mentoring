package com.hackathon.getmentor.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "skill")
public class Skill {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String skillName;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "skill")
	@JsonIgnore
	private Set<MentorSkill> mentorSkill = new HashSet<>();

	public Skill() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Skill(Integer id, String skillName, Set<MentorSkill> mentorSkill) {
		super();
		this.id = id;
		this.skillName = skillName;
		this.mentorSkill = mentorSkill;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSkillName() {
		return skillName;
	}

	public void setSkillName(String skillName) {
		this.skillName = skillName;
	}

	public Set<MentorSkill> getMentorSkill() {
		return mentorSkill;
	}

	public void setMentorSkill(Set<MentorSkill> mentorSkill) {
		this.mentorSkill = mentorSkill;
	}		
}
