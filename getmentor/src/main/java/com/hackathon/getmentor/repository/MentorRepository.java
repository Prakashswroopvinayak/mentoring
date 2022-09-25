package com.hackathon.getmentor.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.getmentor.model.Mentor;

public interface MentorRepository extends JpaRepository<Mentor, Long> {
	public Mentor findByCollege(String college);

}
