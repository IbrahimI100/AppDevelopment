package com.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.entity.TeamEntity;

public interface TeamRepository extends JpaRepository<TeamEntity, Integer> {
    
    @Query("SELECT t FROM TeamEntity t WHERE t.name = :name")
    TeamEntity findByName(@Param("name") String name);
}
