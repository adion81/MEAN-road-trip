import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CityService } from '../city.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-new-city',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.css']
})
export class NewCityComponent implements OnInit {
  @Output() refresh = new EventEmitter();
  constructor(
    private _cityService: CityService,
    private _gameService: GameService
  ) { }
  newCity: any;
  ngOnInit() {
    this.newCity = {
      name: '',
      description: '',
      imageUrl: '',
      bypass: 0,
      north: 0,
      south: 0,
      listNumber: 0o1,
      trip: ''
    }
    console.log(this.newCity.listNumber)
  }

  createCityToService(){
    const obs = this._cityService.createCity(this.newCity);
    obs.subscribe(data => {
      console.log(data);
      
        this.newCity = {
          name: '',
          description: '',
          imageUrl: '',
          bypass: 0,
          north: 0,
          south: 0,
          listNumber: 0,
          trip: ''
        }
        
        this.refresh.emit("refresh");
    })
  }

}
