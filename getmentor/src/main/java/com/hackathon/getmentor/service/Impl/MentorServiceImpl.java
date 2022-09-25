package com.hackathon.getmentor.service.Impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hackathon.getmentor.model.Mentor;
import com.hackathon.getmentor.model.MentorSkill;
import com.hackathon.getmentor.model.Skill;
import com.hackathon.getmentor.model.User;
import com.hackathon.getmentor.repository.MentorRepository;
import com.hackathon.getmentor.repository.SkillRepository;
import com.hackathon.getmentor.repository.UserRepository;
import com.hackathon.getmentor.service.MentorService;

@Service
public class MentorServiceImpl implements MentorService{

	@Autowired
	private MentorRepository mentorRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private SkillRepository skillRepository;
	
	@PersistenceContext
    private EntityManager entityManager;

	@Override
	public Mentor createMentor(Mentor mentor,String username, List<Integer> skillIdList) {
		Set<MentorSkill> mentorSkillSet = new HashSet<>();
		User user = this.userRepository.findByUsername(username);
		for(int sid : skillIdList) {
			Skill skill=this.skillRepository.findById(sid);//find skill
			MentorSkill mentorSkill = new MentorSkill();//create new mentorskill
			mentorSkill.setMentor(mentor);
			mentorSkill.setSkill(skill);
			mentorSkillSet.add(mentorSkill);
			//skill.getMentorSkill().add(mentorSkill);//add this mentorskill to skill's mentorskill set
			//this.skillRepository.save(skill);
		}
		mentor.setMentorSkill(mentorSkillSet);
		
		user.setMentor(mentor);
		mentor.setUser(user);
		
		this.userRepository.save(user);		
		//this.mentorRepository.save(mentor);
		return mentor;
	}

	@Override
	public Mentor getMentor(Long id) {
		return this.mentorRepository.findById(id).orElse(new Mentor());
	}
	
    
	@Override
	public List<Mentor> getTopMentors() {
		return entityManager.createQuery("SELECT m FROM Mentor m ORDER BY m.rating desc",
		          Mentor.class).setMaxResults(9).getResultList();
	}

	@Override
	public List<Mentor> allMentors() {
		return mentorRepository.findAll();
	}

	@Override
	public List<String> allSkillsOfMentor(Long mentorid) {
		Mentor mentor = this.mentorRepository.findById(mentorid).orElse(new Mentor());
		Set<MentorSkill> mentorSkill= mentor.getMentorSkill();
		List<String> skills = new ArrayList<>();
		for(MentorSkill ms : mentorSkill) {
			skills.add(ms.getSkill().getSkillName());
		}
		return skills;
	}

	@Override
	public User getUser(Long mentorid) {
		return this.mentorRepository.findById(mentorid).orElse(new Mentor()).getUser();
	}
	
}
