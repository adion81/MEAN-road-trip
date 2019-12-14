import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'app-new-city',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.css']
})
export class NewCityComponent implements OnInit {
  @Output() refresh = new EventEmitter();
  constructor(
    private _cityService: CityService
  ) { }
  newCity: any;
  ngOnInit() {
    this.newCity = {
      name: '',
      description: '',
      imageUrl: '',
      bypass: 0,
      north: 0,
      south: 0
    }
  }

  createCityToService(){
    const obs = this._cityService.createCity(this.newCity);
    obs.subscribe(data => {
      if(data['results']){
        this.newCity = {
          name: '',
          description: '',
          imageUrl: '',
          bypass: 0,
          north: 0,
          south: 0
        }
        this.refresh.emit("refresh");
      }
    })
  }

}
