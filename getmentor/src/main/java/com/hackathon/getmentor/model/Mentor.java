package com.hackathon.getmentor.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "mentor")
public class Mentor {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String description;
	private Long menteescount=0L;
	private Long rating;
	private String education;
	
	private String companyname;
	private String college;
	private String currentdesig;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "mentor")
	@JsonIgnore
	private Set<MentorSkill> mentorSkill = new HashSet<>();
	
	@OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
	@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User user;

	public Mentor() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Mentor(Long id, String description, Long menteescount, Long rating, String education, String companyname,
			String college, String currentdesig, Set<MentorSkill> mentorSkill, User user) {
		super();
		this.id = id;
		this.description = description;
		this.menteescount = menteescount;
		this.rating = rating;
		this.education = education;
		this.companyname = companyname;
		this.college = college;
		this.currentdesig = currentdesig;
		this.mentorSkill = mentorSkill;
		this.user = user;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getMenteescount() {
		return menteescount;
	}

	public void setMenteescount(Long menteescount) {
		this.menteescount = menteescount;
	}

	public Long getRating() {
		return rating;
	}

	public void setRating(Long rating) {
		this.rating = rating;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public String getCollege() {
		return college;
	}

	public void setCollege(String college) {
		this.college = college;
	}

	public String getCurrentdesig() {
		return currentdesig;
	}

	public void setCurrentdesig(String currentdesig) {
		this.currentdesig = currentdesig;
	}

	public Set<MentorSkill> getMentorSkill() {
		return mentorSkill;
	}

	public void setMentorSkill(Set<MentorSkill> mentorSkill) {
		this.mentorSkill = mentorSkill;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
}
