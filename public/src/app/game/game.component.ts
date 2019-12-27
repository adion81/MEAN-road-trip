import { Component, OnInit } from '@angular/core';
import {  GameService } from '../game.service';
import { CityService } from '../city.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  allCities;
  currentCity;
  currentCityId;
  inCity: Boolean = false;
  constructor(
    private _gameService: GameService,
    private _cityService: CityService
  ) { }

  ngOnInit() {
    console.log(this._gameService.getParty());
    this.currentCityId = 0;
    this.getAllCities();

  }
  getAllCities(){
    let obs = this._cityService.getSelectedCities('Eastern-Seaboard');
    obs.subscribe(data => {
      if(data['results']){
        this.allCities = data['results'];
        this.getCity(this.currentCityId);
      }
    })
  }
  getCity(id){
    this.currentCity = this.allCities[id];
    this.inCity = true;
  }

}
