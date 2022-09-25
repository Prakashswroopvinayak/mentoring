package com.hackathon.getmentor.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.getmentor.model.MentorAvailableSlot;

public interface MentorAvailableSlotRepository extends JpaRepository<MentorAvailableSlot, Long> {
	
	public MentorAvailableSlot findByMentorId(Long id);

	

}
