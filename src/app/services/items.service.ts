import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Challenge } from '../interfaces/iteminterface';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getChallenges(){

     return this.http.get<Challenge>(`https://fortnite-public-api.theapinetwork.com/prod09/challenges/get?season=current`);
  }

  


  

}
