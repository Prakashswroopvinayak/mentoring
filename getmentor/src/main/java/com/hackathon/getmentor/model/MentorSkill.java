package com.hackathon.getmentor.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class MentorSkill {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long mentorSkillId;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.PERSIST)
	private Mentor mentor;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.PERSIST)
	private Skill skill;

	private String videoDocLink;
	
	private Float skillRating;
	
	private boolean skillVerified = true;

	public MentorSkill() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MentorSkill(Long mentorSkillId, Mentor mentor, Skill skill, String videoDocLink, Float skillRating,
			boolean skillVerified) {
		super();
		this.mentorSkillId = mentorSkillId;
		this.mentor = mentor;
		this.skill = skill;
		this.videoDocLink = videoDocLink;
		this.skillRating = skillRating;
		this.skillVerified = skillVerified;
	}

	public Long getMentorSkillId() {
		return mentorSkillId;
	}

	public void setMentorSkillId(Long mentorSkillId) {
		this.mentorSkillId = mentorSkillId;
	}

	public Mentor getMentor() {
		return mentor;
	}

	public void setMentor(Mentor mentor) {
		this.mentor = mentor;
	}

	public Skill getSkill() {
		return skill;
	}

	public void setSkill(Skill skill) {
		this.skill = skill;
	}

	public String getVideoDocLink() {
		return videoDocLink;
	}

	public void setVideoDocLink(String videoDocLink) {
		this.videoDocLink = videoDocLink;
	}

	public Float getSkillRating() {
		return skillRating;
	}

	public void setSkillRating(Float skillRating) {
		this.skillRating = skillRating;
	}

	public boolean isSkillVerified() {
		return skillVerified;
	}

	public void setSkillVerified(boolean skillVerified) {
		this.skillVerified = skillVerified;
	}

	
}
