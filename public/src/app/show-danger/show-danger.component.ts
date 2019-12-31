import { Component, OnInit } from '@angular/core';
import { DangerService } from '../danger.service';

@Component({
  selector: 'app-show-danger',
  templateUrl: './show-danger.component.html',
  styleUrls: ['./show-danger.component.css']
})
export class ShowDangerComponent implements OnInit {
  dangers;
  constructor(
    private _dangerService: DangerService
  ) { }
  ngOnInit() {
  }
  getAllDangers(){
    const obs = this._dangerService.getAllDangers();

    obs.subscribe(data => {
      if(data['results']){
        
      }
    })
  }



}
