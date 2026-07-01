package com.afiot.Af_iot_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.afiot.Af_iot_backend.entity.UserAccess;
import com.afiot.Af_iot_backend.repository.UserAccessRepository;

@RestController
@RequestMapping("/access")
@CrossOrigin("*")
public class UserAccessController {

    @Autowired
    private UserAccessRepository repo;

    @GetMapping
    public List<UserAccess> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public UserAccess add(
            @RequestBody UserAccess access) {

        return repo.save(access);
    }

    @DeleteMapping("/{id}")
    public void delete(
            @PathVariable Long id) {

        repo.deleteById(id);
    }
}