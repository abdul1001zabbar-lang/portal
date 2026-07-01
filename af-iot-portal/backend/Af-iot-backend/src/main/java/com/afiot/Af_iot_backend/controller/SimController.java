package com.afiot.Af_iot_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.afiot.Af_iot_backend.entity.Sim;
import com.afiot.Af_iot_backend.repository.SimRepository;

@RestController
@RequestMapping("/sims")
@CrossOrigin("*")
public class SimController {

    @Autowired
    private SimRepository repo;

    @GetMapping
    public List<Sim> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Sim add(@RequestBody Sim sim) {
        return repo.save(sim);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}