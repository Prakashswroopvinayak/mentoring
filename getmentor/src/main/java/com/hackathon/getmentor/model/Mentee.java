package com.hackathon.getmentor.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "mentee")
public class Mentee {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String description;
	private Long rating;
	private String education;
	
	private String companyname;
	private String college;
	private String currentdesig;
	
	@OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

	public Mentee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Mentee(Long id, String description, Long rating, String education, String companyname, String college,
			String currentdesig, User user) {
		super();
		this.id = id;
		this.description = description;
		this.rating = rating;
		this.education = education;
		this.companyname = companyname;
		this.college = college;
		this.currentdesig = currentdesig;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
}
