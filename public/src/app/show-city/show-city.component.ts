import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-show-city',
  templateUrl: './show-city.component.html',
  styleUrls: ['./show-city.component.css']
})
export class ShowCityComponent implements OnInit {

  constructor(
    private _cityService : CityService
  ) { }
  allCities: any;
  ngOnInit() {
    this.getAllCitiesFromService();
  }
  getAllCitiesFromService(){
    const obs = this._cityService.getAllCities();
    obs.subscribe(data => {
      if(data['results']){
        this.allCities = data['results'];
      }
    })
  }

}
