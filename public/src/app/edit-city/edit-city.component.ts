import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { CityService } from '../city.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit,OnChanges {
  @Input() cityId;
  @Output() close = new EventEmitter();

  constructor(
    private _cityService: CityService,
    private _gameService: GameService
  ) { }
  editCity: any;
  ngOnInit() {
    this.getEditCity(this.cityId);
  }
  ngOnChanges(){
    this.getEditCity(this.cityId);
  }

  getEditCity(id){
    const obs = this._cityService.getOneCity(id);
    obs.subscribe(data => {
      if(data['results']){
        this.editCity = data['results'];
      } 
    })
  }

  updateCityToService(){
    const obs = this._cityService.updateCity(this.editCity);

    obs.subscribe(data => {
      if(data['results']){
        this.editCity = null;
      }
    })
  }
  closeEdit(){
    this.close.emit(true);
  }

}
