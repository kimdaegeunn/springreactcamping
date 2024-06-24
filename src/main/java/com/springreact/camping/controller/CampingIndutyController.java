package com.springreact.camping.controller;

import com.springreact.camping.entity.Camping;
import com.springreact.camping.repository.CampingSearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/Campinginduty")
public class CampingIndutyController {

    @Autowired
    private CampingSearchRepository campingSearchRepository;

    @GetMapping
    public List<Camping> getCampingByInduty(@RequestParam(value = "induty") String induty) {
        String fixedInduty = "%" + induty + "%";
        return campingSearchRepository.findByInduty(fixedInduty);
    }

    private String getFullKeywordName(String keyword) {
        switch (keyword) {
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
            case "와이파이":
                return "무선인터넷";
            default:
                return keyword;
        }
    }
}
