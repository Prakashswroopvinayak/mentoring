package com.hackathon.getmentor.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.getmentor.model.Roles;

public interface RolesRepository extends JpaRepository<Roles, Long> {
	public Roles findByRoleName(String roleName);

}
