package com.auth;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.ContactEntity;
import com.entity.FeedbackEntity;
import com.entity.TeamEntity;
import com.entity.User;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;


    // Admin Controller

    @PostMapping("/admin/register")
    public String adminregister(@RequestBody RegisterRequest request){
        AuthenticationResponse token =  service.adminregister(request);
        String createdmessage ="";
        if(token!=null){
             createdmessage = "Admin Created";
        }else{
             createdmessage = "SomeThing Went Wrong";

        }
        return createdmessage;
    }

    @PostMapping("/admin/authenticate")
    public ResponseEntity<AuthenticationResponse> adminAuthenticate(@RequestBody AuthenticationRequest adminrequest){
        return ResponseEntity.ok(service.adminAuthenticate(adminrequest));
    }
    
    @GetMapping("/admin/getadmin/{email}")
    public ResponseEntity<Optional<User>> getadminById(@PathVariable String email){
    	return ResponseEntity.ok(service.getadminById(email));
    }
    
    //user controller
    @PostMapping("/user/register")
    public String userregister(@RequestBody RegisterRequest request){
        AuthenticationResponse token =  service.userregister(request);
        String createdmessage ="";
        if(token!=null){
             createdmessage = "User Created";
        }else{
             createdmessage = "SomeThing Went Wrong";

        }
        return createdmessage;
    }
    
    @PostMapping("/user/authenticate")
    public ResponseEntity<AuthenticationResponse> userAuthenticate(@RequestBody AuthenticationRequest userrequest){
        return ResponseEntity.ok(service.userauthenticate(userrequest));
    }
    
    @GetMapping("/user/getuser/{email}")
    public ResponseEntity<Optional<User>> getuserById(@PathVariable String email){
    	return ResponseEntity.ok(service.getuserById(email));
    }
    
    @DeleteMapping("/user/delete/{email}") 
    public String  deleteUser(@PathVariable String email){
        service.deleteUserByUsername(email);
        String message = "User "+email + " Deleted Successfully";
        return message;
    }
    
    @PostMapping("post/feed")
    public String saveFeed(@RequestBody FeedbackEntity feed)
    {
    	service.SaveFeed(feed);
    	return "Feedback Post Successfully";
    }
    @PostMapping("post/contact")
    public String saveContact(@RequestBody ContactEntity contact)
    {
    	service.SaveContact(contact);
    	return "Contact Post Successfully";
    }
    
    @PutMapping(value = "user/update/{email}", produces = "application/json")
    public String updateUser(@PathVariable String email, @RequestBody User updatedUser){
        service.updatedUser(email, updatedUser);
        String updatemessage = "User "+email+ " Updated";
        return updatemessage;
    }
   
    
    @PostMapping("/vote/{teamName}")
    public TeamEntity voteForTeam(@PathVariable String teamName) {
        return service.voteForTeam(teamName);
    }
    
    @GetMapping("/teams")
    public List<TeamEntity> getAllTeams() {
        return service.getAllTeams();
    }

}
