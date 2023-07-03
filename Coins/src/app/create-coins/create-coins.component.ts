import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../services/coins.service';
import { Coins } from '../coins.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-coins',
  templateUrl: './create-coins.component.html',
  styleUrls: ['./create-coins.component.css']
})
export class CreateCoinsComponent implements OnInit {

  coin : Coins=new Coins();
  coins!: Observable<Coins[]>;

  constructor(private coinsService:CoinsService ) { }

  ngOnInit(): void {
    this.getUserList();
  }
  createCoin() {
    this.coinsService.createCoin(this.coin)
    .subscribe(
      data => {console.log(data)
        this.getUserList();
       //this.gotoList();
     },
      error=>console.error()
      );
  }

  getUserList(){
    this.coins=this.coinsService.getCoinsList();
  }
}
