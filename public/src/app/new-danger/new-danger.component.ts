import { Component, OnInit } from '@angular/core';
import { DangerService } from '../danger.service';

@Component({
  selector: 'app-new-danger',
  templateUrl: './new-danger.component.html',
  styleUrls: ['./new-danger.component.css']
})
export class NewDangerComponent implements OnInit {

  constructor(private _dangerService: DangerService) { }
  newDanger: any;
  ngOnInit() {
    this.newDanger = {
      class: '',
      name: '',
      description: '',
      damage: 1
    }
  }

  createDangerToService(){
    const obs = this._dangerService.createDanger(this.newDanger);

    obs.subscribe(data => {
      this.newDanger = {
        class: '',
        name: '',
        description: '',
        damage: 1
      }
    })
  }

}
