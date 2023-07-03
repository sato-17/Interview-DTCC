package com.sato.coins.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sato.coins.model.Coins;

public interface CoinsRepository extends JpaRepository<Coins, Integer> {

}
