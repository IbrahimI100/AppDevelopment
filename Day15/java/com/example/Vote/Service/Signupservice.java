//Signupservice.java

package com.example.Vote.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Vote.Entity.Signupentities;
import com.example.Vote.Repository.Signuprepo;

@Service
public class Signupservice {

	@Autowired
	private Signuprepo signuprepo;
	
	public Signupentities saveDetails(Signupentities signupentities) {
		return signuprepo.save(signupentities);
	}

	public List<Signupentities> retrieve() {
		return signuprepo.findAll();
	}

	public Signupentities retrieveafterupdate(int id, Signupentities signupentities) {
	
		Signupentities signupentities1=signuprepo.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
		signupentities1.setName(signupentities.getName());
		signupentities1.setAge(signupentities.getAge());
		signupentities1.setEmail(signupentities.getEmail());
		signupentities1.setUsername(signupentities.getUsername());
		signupentities1.setPassword(signupentities.getPassword());
		return signuprepo.save(signupentities1);
	}

	public void deleteUser(int id) {
		signuprepo.deleteById(id);
	}
}
