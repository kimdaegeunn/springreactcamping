package com.springreact.camping.repository;

import com.springreact.camping.entity.Camping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CampingRepository extends JpaRepository<Camping, Long> {

    @Query(value = "select * from Cammping where addr like :region1 or addr like :region2 order by addr asc", nativeQuery = true)
//    @Query(value = "select * from Camping where addr like :region1 or addr like :region2 order by addr asc", nativeQuery = true)
    List<Camping> findByRegionLike(@Param("region1") String region1, @Param("region2") String region2);
}
