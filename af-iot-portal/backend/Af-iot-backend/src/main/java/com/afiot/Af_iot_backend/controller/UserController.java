package com.afiot.Af_iot_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.afiot.Af_iot_backend.entity.User;
import com.afiot.Af_iot_backend.repository.UserRepository;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserRepository repo;

    @GetMapping
    public List<User> getAllUsers() {
        return repo.findAll();
    }
    
    @PostMapping
    public User addUser(@RequestBody User user) {

        return repo.save(user);
    }
    
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {

        repo.deleteById(id);

    }

}

