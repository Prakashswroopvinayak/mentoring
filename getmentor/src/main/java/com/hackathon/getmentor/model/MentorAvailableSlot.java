package com.hackathon.getmentor.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "MentorAvailableSlot")
public class MentorAvailableSlot {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@JsonView(Views.MyResponseViews.class)
	private Long id;
	
	private Long mentorId;
	private Date slotDate;
	
	@JsonView(Views.MyResponseViews.class)
	private String strtTime;
	
	@JsonView(Views.MyResponseViews.class)
	private String endTime;
	
	private boolean isBooked;
	private Long bookedByUser;
	public MentorAvailableSlot(Long id, Long mentorId, Date slotDate, String strtTime, String endTime, boolean isBooked,
			Long bookedByUser) {
		super();
		this.id = id;
		this.mentorId = mentorId;
		this.slotDate = slotDate;
		this.strtTime = strtTime;
		this.endTime = endTime;
		this.isBooked = isBooked;
		this.bookedByUser = bookedByUser;
	}
	public MentorAvailableSlot() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getMentorId() {
		return mentorId;
	}
	public void setMentorId(Long mentorId) {
		this.mentorId = mentorId;
	}
	public Date getDate() {
		return slotDate;
	}
	public void setDate(Date slotDate) {
		this.slotDate = slotDate;
	}
	public String getStrtTime() {
		return strtTime;
	}
	public void setStrtTime(String strtTime) {
		this.strtTime = strtTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public boolean getIsBooked() {
		return isBooked;
	}
	public void setIsBooked(boolean isBooked) {
		this.isBooked = isBooked;
	}
	public Long getBookedByUser() {
		return bookedByUser;
	}
	public void setBookedByUser(Long bookedByUser) {
		this.bookedByUser = bookedByUser;
	}
	
}
