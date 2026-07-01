package com.afiot.Af_iot_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.afiot.Af_iot_backend.entity.Device;

@Repository
public interface DeviceRepository extends JpaRepository<Device, Long> {

}