package com.springreact.camping.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "cammping")
public class Camping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "camp_name")
    private String camp_name;

    @Column(name = "linei_info")
    private String linei_info;

    @Column(name = "info")
    private String info;

    @Column(name = "sub_info")
    private String sub_info;

    @Column(name = "induty")
    private String induty;

    @Column(name = "tag")
    private String tag;

    @Column(name = "donm")
    private String donm;

    @Column(name = "sigungunm")
    private String sigungunm;

    @Column(name = "zipcode")
    private Long zipcode;

    @Column(name = "addr")
    private String addr;

    @Column(name = "mapx")
    private Double mapx;

    @Column(name = "mapy")
    private Double mapy;

    @Column(name = "tel")
    private String tel;

    @Column(name = "homepage")
    private String homepage;

    @Column(name = "general")
    private Long general;

    @Column(name = "car")
    private Long car;

    @Column(name = "glamping")
    private Long glamping;

    @Column(name = "caravan")
    private Long caravan;

    @Column(name = "bottom1")
    private Long bottom1;

    @Column(name = "bottom2")
    private Long bottom2;

    @Column(name = "bottom3")
    private Long bottom3;

    @Column(name = "bottom4")
    private Long bottom4;

    @Column(name = "bottom5")
    private Long bottom5;

    @Column(name = "glamp_inner")
    private String glamp_inner;

    @Column(name = "caravan_inner")
    private String caravan_inner;

    @Column(name = "op_season")
    private String op_season;

    @Column(name = "op_day")
    private String op_day;

    @Column(name = "toilet_count")
    private Long toilet_count;

    @Column(name = "shower_count")
    private Long shower_count;

    @Column(name = "sink_count")
    private Long sink_count;

    @Column(name = "brazier_count")
    private String brazier_count;

    @Column(name = "amenities")
    private String amenities;

    @Column(name = "facilities")
    private String facilities;

    @Column(name = "theme")
    private String theme;

    @Column(name = "animal")
    private String animal;

    @Column(name = "imgurl")
    private String imgurl;

}
