package com.afiot.Af_iot_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.afiot.Af_iot_backend.entity.Device;
import com.afiot.Af_iot_backend.repository.DeviceRepository;

@RestController
@RequestMapping("/devices")
@CrossOrigin("*")
public class DeviceController {

    @Autowired
    private DeviceRepository repo;

    @GetMapping
    public List<Device> getAllDevices() {
        return repo.findAll();
    }

    @PostMapping
    public Device addDevice(@RequestBody Device device) {
        return repo.save(device);    
    }
    
    @DeleteMapping("/{id}")
    public void deleteDevice(@PathVariable Long id) {

        repo.deleteById(id);
    }

}