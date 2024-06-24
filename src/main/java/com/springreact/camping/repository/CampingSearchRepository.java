package com.springreact.camping.repository;

import com.springreact.camping.entity.Camping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CampingSearchRepository extends JpaRepository<Camping, Long> {

    @Query(value = "SELECT * FROM Cammping WHERE addr LIKE :keyword1 OR addr LIKE :keyword2 OR camp_name like :keyword1 or camp_name like :keyword2 or facilities like :keyword1 or facilities like :keyword2 or amenities like :keyword1 or amenities like :keyword2", nativeQuery = true)
    List<Camping> findByKeyword(@Param("keyword1") String keyword1, @Param("keyword2") String keyword2);

    @Query(value = "SELECT * FROM Cammping WHERE induty like :fixedInduty", nativeQuery = true)
    List<Camping> findByInduty(@Param("fixedInduty") String fixedInduty);

}
