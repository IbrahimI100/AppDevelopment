package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.entity.VotedEntity;

public interface VotedRepository extends JpaRepository<VotedEntity, Long> {
    VotedEntity findByEmail(String email);
}
