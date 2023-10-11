package com.example.Vote.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Vote.Entity.Signupentities;

public interface Signuprepo extends JpaRepository<Signupentities,Integer>{

}
