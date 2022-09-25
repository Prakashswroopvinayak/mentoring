package com.hackathon.getmentor.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.hackathon.getmentor.model.MentorAvailableSlot;
import com.hackathon.getmentor.model.Views;
import com.hackathon.getmentor.service.MentorAvailableSlotService;
import com.hackathon.getmentor.service.MentorService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/meetingslots")
public class MentorAvailableSlotController {
	//getEmptySlotsByMentorDate
	@Autowired
	private MentorAvailableSlotService mentorSlotService;
	
	//change returntypes to use jsonview
	@GetMapping("/gettime")
	@JsonView(Views.MyResponseViews.class)
	public List<MentorAvailableSlot> getAvailableSlots(@RequestParam("mentorid") Long mentorid, 
			@RequestParam("slotdate") Date slotdate) throws Exception{
		//System.out.pritln(dto);
		
		return this.mentorSlotService.getEmptySlotsByMentorDate(mentorid, slotdate);
	}
	@PutMapping("/")
	@JsonView(Views.MyResponseViews.class)
	public ResponseEntity saveBooking(@RequestBody MentorAvailableSlot mentorAvailableSlot) throws Exception{
		
		ResponseEntity<Object> ret = this.mentorSlotService.saveBooking(mentorAvailableSlot);
		//System.out.print(ret);
		return ret;
	}
	
	

}