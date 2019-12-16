import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-show-city',
  templateUrl: './show-city.component.html',
  styleUrls: ['./show-city.component.css']
})
export class ShowCityComponent implements OnInit, OnChanges {
  @Output() cityId = new EventEmitter();
  @Input() cityKey: string = '';
  constructor(
    private _cityService : CityService
  ) { }
  allCities: any;
  ngOnInit() {
    this.getAllCitiesFromService();
    if(this.cityKey == ''){
      this.getAllCitiesFromService();
    }
    else{
      this.getSelectedTripCitiesFromService(this.cityKey);
    }
  }

  ngOnChanges(){
    this.getAllCitiesFromService();
    if(this.cityKey == ''){
      this.getAllCitiesFromService();
    }
    else{
      this.getSelectedTripCitiesFromService(this.cityKey);
    }
  }
  getAllCitiesFromService(){
    const obs = this._cityService.getAllCities();
    obs.subscribe(data => {
      if(data['results']){
        this.allCities = data['results'];
      }
    })
  }
  getSelectedTripCitiesFromService(key){
    const obs = this._cityService.getSelectedCities(key);
    obs.subscribe(data => {
      if(data['results']){
        this.allCities = data['results'];
      }
    })
  }
  sendEditId(id){
      this.cityId.emit(id);
  }

}
