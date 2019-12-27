import { Injectable } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  _state = {
    playing: {
      vehicle: null,
      snacks :{
        chips : 0,
        fruit : 0,
        soda : 0,
        beefSticks: 0,
        nuts: 0,
        beer: 0
      }
    },
    vehicles:{
      hooptie:{
        id: 1,
        speed: 50,
        img: 'hooptie.jpg',
        capacity: 4,
        passengers: [],
        fuel: 0
      },
      momSuv:{
        id: 2,
        speed: 85,
        img: 'momSuv.jpg',
        capacity: 7,
        passengers: [],
        fuel : 0
      },
      partyBus:{
        id: 3,
        speed: 65,
        img: 'partyBus.jpg',
        capacity: 10,
        passengers: [],
        fuel: 0
      }
    }
  }
  constructor() {}


  createParty(newParty,vehicleId){
    for(var key in this._state.vehicles){
      if(this._state.vehicles[key].id === vehicleId){
        this._state.playing.vehicle = this._state.vehicles[key];
        for(var player in newParty){
          this._state.playing.vehicle.passengers.push(newParty[player]);
        }
        console.log(this._state);
        return true;
      }
    }
    
  }
  getParty(){
    return this._state.playing;
  }
}
