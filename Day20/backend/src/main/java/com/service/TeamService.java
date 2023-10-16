package com.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.TeamEntity;
import com.repository.TeamRepository;

import java.util.List;

@Service
public class TeamService {

    private final TeamRepository teamRepository;

    @Autowired
    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<TeamEntity> getAllTeams() {
        return teamRepository.findAll();
    }

    public TeamEntity voteForTeam(String teamName) {
        System.out.println("Received team name: " + teamName);
        TeamEntity team = teamRepository.findByName(teamName);
        if (team != null) {
            team.setTotalVotes(team.getTotalVotes() + 1);
            return teamRepository.save(team);
        }
        System.out.println("Team not found: " + teamName);
        return null; // Handle team not found scenario
    }

}
