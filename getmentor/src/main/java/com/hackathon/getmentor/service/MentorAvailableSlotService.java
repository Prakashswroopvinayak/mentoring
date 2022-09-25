package com.hackathon.getmentor.service;

import java.sql.Date;
import java.util.List;

import org.springframework.http.ResponseEntity;

import com.hackathon.getmentor.model.MentorAvailableSlot;

public interface MentorAvailableSlotService {
	public List<MentorAvailableSlot> getEmptySlotsByMentorDate(Long mentorId, Date slotDate);

	ResponseEntity saveBooking(MentorAvailableSlot mentorAvailableSlot) throws Exception;

}
