package com.springreact.camping.controller;

import com.springreact.camping.entity.Camping;
import com.springreact.camping.repository.CampingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/Campinglist")
public class CampingController {

    @Autowired
    private CampingRepository campingRepository;

    @GetMapping
    public List<Camping> getCampingByRegion(@RequestParam(value = "region") String region) {
        if (region == null || region.isEmpty()) {
            return campingRepository.findAll();
        }
        String region1 = region + "%";
        String region2 = getFullRegionName(region) + "%";
        return campingRepository.findByRegionLike(region1, region2);
    }


    private String getFullRegionName(String region) {
        switch (region) {
            case "경북":
                return "경상북도";
            case "경남":
                return "경상남도";
            case "충북":
                return "충청북도";
            case "충남":
                return "충청남도";
            case "전북":
                return "전라북도";
            case "전남":
                return "전라남도";
            default:
                return region;
        }
    }
}
