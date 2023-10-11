package com.example.Vote.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Vote.Entity.Signupentities;
import com.example.Vote.Service.Signupservice;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Signupcontroller {

	@Autowired
	private Signupservice signupservice;
	
	@PostMapping("/addUsers")
	public Signupentities postDetails(@RequestBody Signupentities signupentities) {
		return signupservice.saveDetails(signupentities);
		
	}
	
	@GetMapping("/getUsers")
	public List<Signupentities> getDetails(){
		return signupservice.retrieve();
	}
	
	@PutMapping("/updateUser/{id}")
	public Signupentities updateDetails(@PathVariable int id,@RequestBody Signupentities signupentities) {
		return signupservice.retrieveafterupdate(id,signupentities);
	}
	
	@DeleteMapping("/deleteDetails/{id}")
	public void deleteDetails(@PathVariable int id) {
		signupservice.deleteUser(id);
		System.out.print("User got deleted");
	}
}
