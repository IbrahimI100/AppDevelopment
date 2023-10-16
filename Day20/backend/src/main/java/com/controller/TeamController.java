package com.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.entity.TeamEntity;
import com.service.TeamService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TeamController {

    private final TeamService teamService;

    @Autowired
    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping("/teams")
    public List<TeamEntity> getAllTeams() {
        return teamService.getAllTeams();
    }

    @PostMapping("/vote/{teamName}")
    public TeamEntity voteForTeam(@PathVariable String teamName) {
        return teamService.voteForTeam(teamName);
    }
}
