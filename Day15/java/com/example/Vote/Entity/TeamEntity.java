package com.example.Vote.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "teams")
public class TeamEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column
    private int totalVotes;

    public TeamEntity() {
    }

    public TeamEntity(String name, int totalVotes) {
        this.name = name;
        this.totalVotes = totalVotes;
    }

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	

	public void setTotalVotes(int totalVotes) {
		this.totalVotes = totalVotes;
	}

	public int getTotalVotes() {
		return totalVotes;
	}

    
}

