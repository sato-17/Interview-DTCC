import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coins } from '../coins.model';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private httpClient:HttpClient) { }

  url: string="http://localhost:8080/api/";

  getCoinsList() :Observable<any>{
    return this.httpClient.get(`${this.url}coins`);
  }

  createCoin(coin:Coins) :Observable<any>{
    return this.httpClient.post(`${this.url}coin`, coin);
  }
}
