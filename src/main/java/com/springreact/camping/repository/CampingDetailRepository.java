package com.springreact.camping.repository;

import com.springreact.camping.entity.Camping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface CampingDetailRepository extends JpaRepository<Camping, Long> {

    @Query(value = "select * from Cammping where id = :id",nativeQuery = true)
    Optional<Camping> findByMatchId(@Param("id") Long id);
}
