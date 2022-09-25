package com.hackathon.getmentor.service.Impl;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hackathon.getmentor.model.MentorAvailableSlot;
import com.hackathon.getmentor.repository.MentorAvailableSlotRepository;
import com.hackathon.getmentor.service.MentorAvailableSlotService;

@Service
public class MentorAvailableSlotServiceImpl implements MentorAvailableSlotService{

	@PersistenceContext
    private EntityManager entityManager;

	@Autowired
	private MentorAvailableSlotRepository mentorAvailableSlotRepository; 
	
	@Override
	public List<MentorAvailableSlot> getEmptySlotsByMentorDate(Long mentorId, Date slotDate) {
		
		return entityManager.createQuery("SELECT s FROM MentorAvailableSlot s where s.mentorId="+mentorId+" and slotDate='"+
				slotDate+"' and isBooked="+0,
						MentorAvailableSlot.class).getResultList();
	}
	
	@Override
	public ResponseEntity saveBooking(MentorAvailableSlot mentorAvailableSlot) throws Exception{
		Long slotId = mentorAvailableSlot.getId();
		MentorAvailableSlot temp = mentorAvailableSlotRepository.findById(slotId)
				.orElseThrow(() -> new NotFoundException());;
		System.out.print("booked");
		if (temp.getIsBooked()) {
			if(temp.getBookedByUser() == mentorAvailableSlot.getBookedByUser())
				return new ResponseEntity<String>(
					      "You have already booked this slot ", 
					      HttpStatus.OK);
						
	        return new ResponseEntity<>(
	          "Sorry this slot got booked just few seconds ago", 
	          HttpStatus.BAD_REQUEST);
	    }
		temp.setBookedByUser(mentorAvailableSlot.getBookedByUser());
		temp.setIsBooked(true);
		mentorAvailableSlotRepository.save(temp);
	      
	    return new ResponseEntity<>(
	      "Successfully Booked", 
	      HttpStatus.OK);
		
	}

}
