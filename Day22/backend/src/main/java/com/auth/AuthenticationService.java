package com.auth;

import java.util.List;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import com.config.JwtService;
import com.entity.ContactEntity;
import com.entity.FeedbackEntity;
import com.entity.TeamEntity;
import com.entity.User;
import com.entity.enumerate.Role;
import com.repository.ContactRepository;
import com.repository.FeedbackRepository;
import com.repository.TeamRepository;
import com.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final FeedbackRepository repo;
    private final ContactRepository con;
    private final TeamRepository repos;
    
    public AuthenticationResponse userregister(RegisterRequest request) {
        var user = User.builder()
        .email(request.getEmail())
        .name(request.getName())
        
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.USER)
        .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
    }

    public AuthenticationResponse userauthenticate(AuthenticationRequest request) {
    	authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
       );
        var user = repository.findById(request.getEmail()).orElseThrow();
        var role = user.getRole();
        if(role.toString()=="USER") {
        	var jwtToken = jwtService.generateToken(user);
        	return AuthenticationResponse.builder().token(jwtToken).build();
        }
        else {
        	return null;
        }
    }

   public void updatedUser(String email, User updateUser){
    User user = repository.findByEmail(email);
    if(!user.toString().isEmpty()){

        user.setName(updateUser.getName());
        
        user.setRole(Role.USER);
        repository.save(user);
    }
   }
    public void deleteUserByUsername(String email){
        User user = repository.findByEmail(email);
        if(user!=null){
            repository.delete(user);
        }
    }
    
  

    // Admin Service


    public AuthenticationResponse adminregister(RegisterRequest request){
        var admin =  User.builder()
        .email(request.getEmail())
        .name(request.getName())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.ADMIN)
        .build();
        repository.save(admin);
        var jwtToken = jwtService.generateToken(admin);

        return AuthenticationResponse.builder()
        .token(jwtToken)

        .build();
    }

    public AuthenticationResponse adminAuthenticate(AuthenticationRequest request){
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        var admin = repository.findById(request.getEmail()).orElseThrow();
        var role = admin.getRole();
        if(role.toString()=="ADMIN") {
        	var adminToken = jwtService.generateToken(admin);
        	return AuthenticationResponse.builder().token(adminToken).build();
        }
        else
		 return null;
    
    }
    
    public Optional<User> getadminById(String email) {
        var admin = repository.findById(email);
        return admin;
    }

	public FeedbackEntity SaveFeed(FeedbackEntity feed) {
		return repo.save(feed);
		
	}

	   public Optional<User> getuserById(String email) {
	        var user = repository.findById(email);
	        return user;
	    }

	public ContactEntity SaveContact(ContactEntity contact) {
		return con.save(contact);
		
	}

	 public TeamEntity voteForTeam(String teamName) {
	        System.out.println("Received team name: " + teamName);
	        TeamEntity team = repos.findByName(teamName);
	        if (team != null) {
	            team.setTotalVotes(team.getTotalVotes() + 1);
	            return repos.save(team);
	        }
	        System.out.println("Team not found: " + teamName);
	        return null; // Handle team not found scenario
	    }

	  public List<TeamEntity> getAllTeams() {
	        return repos.findAll();
	    }
	  

}