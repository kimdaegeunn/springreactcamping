package com.springreact.camping.controller;

import com.springreact.camping.entity.Camping;
import com.springreact.camping.repository.CampingDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/CampingDetail")
public class CampingDetailController {

    @Autowired
    private CampingDetailRepository campingDetailRepository;

    @GetMapping("/{id}")
    public Optional<Camping> getCampingDetail(@PathVariable(value = "id") Long id) {
        return campingDetailRepository.findByMatchId(id);
    }


}
