import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private _router: Router
    ) { }
  loggedIn = false;
  private _pass = "bennybob";
  answer: string;
  cityForm: boolean = false;
  dangerForm: boolean = false;
  editCityId: any;
  cityKey: any;


  ngOnInit() {
    this.answer = '';
  }

  adminLoggin(){
    console.log(this.answer)
    if(this.answer === this._pass){
      this.loggedIn = true;
    }
    else{
      this._router.navigate(['/']);
    }
  }

  displayCityForm(){
    this.cityForm = !this.cityForm;
  }
  displayDangerForm(){
    this.dangerForm = !this.dangerForm;
  }

  updateCities(e){
    console.log(e);
  }
  getEditCity(id){
    this.editCityId = id;
  }
  changeKey(key){
    console.log(key);
    this.cityKey = key;
  }


}
