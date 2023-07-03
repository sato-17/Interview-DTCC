package com.sato.coins.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sato.coins.model.Coins;
import com.sato.coins.repo.CoinsRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CoinsResource {
	@Autowired
	private CoinsRepository repo;
	
	@GetMapping("/health")
	public String health() {
		return "hi";
	}
	
	@GetMapping("/coins")
	public List<Coins> getAllCoins() {
		
		List<Coins> coinsList = repo.findAll();
		
		Map<String , Coins> map = new HashMap<>();
		for(Coins coin:coinsList) {
			if(map.containsKey(coin.getName())) {
				coin.setCoins(coin.getCoins()+map.get(coin.getName()).getCoins());
				map.put(coin.getName(), coin);
			}
			else {
				
				map.put(coin.getName(), coin);
			}
				
		}
		
		return map.entrySet().stream().map(entry -> entry.getValue())
				.collect(Collectors.toList());
	}
	
	@PostMapping("/coin")
	public Coins create(@RequestBody Coins coin) {
		//Coins newCoin = new Coins();
		//newCoin.setCoin(coin.getCoin());
		repo.save(coin);
		return coin;
		
	}

}
